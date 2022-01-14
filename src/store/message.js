module.exports = {
    state: {
        messages: [],
        messageId: 0,
    },

    mutations: {
        newMessage (state, {text, type}) {
            const currentMessage = {id: state.messageId, text, type}
            state.messages.push(currentMessage);
            state.messageId++;
        },

        deleteMessage (state, messageIndex) {
            state.messages.splice(messageIndex, 1);
        },
        
        deleteAllMessages (state) {
            state.messages = [];
        }
    },

    actions: {
        appendMessage (context, {text, type}) {
            context.commit('newMessage', {type, text});

            const messageId = context.getters.currentId - 1;

            setTimeout(() => {
                const message = context.getters.findMessageById(messageId);
                const messageIndex = context.getters.messages.indexOf(message);
                context.commit('deleteMessage', messageIndex);
            }, 1500);
        },

        deleteAllMessages (context) {
            context.commit('deleteAllMessages');
        }
    },

    getters: {
        messages (state) {
            return state.messages;
        },

        currentId (state) {
            return state.messageId;
        },
        
        findMessageById: state => id => {
            return state.messages.find(elem => elem.id === id);
        }
    }
}
