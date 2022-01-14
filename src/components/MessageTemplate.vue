<template>
    <div class="errors__parent">
        <transition-group name="error" mode="out-in" tag="ul" class="error">
            <li class = "error_message" :class="message.type == 'success' ? 'success' : 'error'" v-for="message in $store.getters.messages" :key="message.id">
                <div class="error-mesage-icon">
                    <svg v-if="message.type == 'error'" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28 2.83L25.17 0L14 11.17L2.83 0L0 2.83L11.17 14L0 25.17L2.83 28L14 16.83L25.17 28L28 25.17L16.83 14L28 2.83Z" fill="black"/>
                    </svg>
                    <svg v-if="message.type == 'success'" width="41" height="31" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3198 23.8414L3.99445 14.516L0.830078 17.6804L13.3198 30.1702L40.1555 3.33453L36.9911 0.170166L13.3198 23.8414Z" fill="black"/>
                    </svg>
                </div>
                <span>{{message.text}}</span>
            </li>
        </transition-group>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'MessageTemplate',
}
</script>

<style scoped>

.error_message {
    padding: 15px 10px;
    border-radius: 5px;
    color:var(--white);
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px; 
}
.error_message.error {
    background: #f7471c;
}
.error_message.success {
    background: #47d78a;
}
.error_message.success svg path {
    fill : #47d78a
}
.error_message.error svg path {
    fill : #f7471c;
}
.error-mesage-icon {
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    background: var(--white);
}
.error-mesage-icon svg, .error-mesage-icon img {
    width: 100%;
    height: 100%;
    padding: 8px;
}
.message__text {
    font-size: 18px;
}

.errors__message svg path{
    fill: var(--red);
}

.errors__message svg {
    width: 30px;
    margin-right: 10px;
}

.errors__parent {
    position: fixed;
    bottom: 30px;
    left: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 999;
}
.errors__parent ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;  
    height: 100%;  
}
.error-enter-active,
.error-leave-active {
    top: 50px;
    transition: opacity 0.5s;
}

.error-enter,
.error-leave-to {
    top: 0px;
    opacity: 0;
}
@media (max-width : 768px) {
    .errors__parent {
        width: 95%;
        left : 2%;
        bottom: 0;
    }
    .error_message span {
        font-size: 20px;
    }
    .error-mesage-icon {
        width: 30px;    
        height: 30px;
    }
}
</style>
