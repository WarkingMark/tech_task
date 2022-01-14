import Vue from 'vue'
import Vuex from 'vuex'
import messages from './message'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products : []
	},
	mutations: {
		addProduct (state, data) {
			state.products.push(data)
		},
		changeProduct (state, data) {
			state.products = data;
		},
		deleteProducts (state, index) {
			state.products.splice(index, 1);
		}
	},
	actions: {	
		setProduct (context, data) {
			context.commit('addProduct', data);
		},
		removeProduct (context, product) {
			context.commit('deleteProducts', product.index);
			context.dispatch('appendMessage', {type : 'success', text: `Товар ${product.data.name} успешно удалён!`});  
		}
	},
	getters: {
		products (state) {
			return state.products
		},
		sortedByName (state) {
			return state.products.sort((a, b) => a.name.localeCompare(b.name))
		}, 
		sortedByPriceMin (state) {
			return state.products.sort((a, b) => Number(a.price) < Number(b.price) ? -1 : 0);
		},
		sortedByPriceMax (state) {
			return state.products.sort((a, b) => Number(a.price) > Number(b.price) ? -1 : 0);
		}
	},
	modules: {
		messages
	},
	plugins: [createPersistedState()],
})
