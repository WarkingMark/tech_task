<template>
    <div class="container">
        <h1 class = "section-title">Добавление товара</h1>
        <div class="adding">
            <form-default-template>
                <custom-input
                    :label="true"
                    title="Наименование товара"
                    placeholder="Введите наименование товара"
                    name="name"
                    note="обязательно для заполнения"
                    v-model.trim="name"
                    :class="v$.name.$silentErrors.length !== 0 ? 'error' : 'invalid'"
                >
                    <span class="error-message" v-if="v$.name.$silentErrors.length !== 0">{{v$.name.$silentErrors[0].$message}}</span>
                </custom-input>
                <custom-text-area
                    :label="true"
                    title="Описание товара"
                    placeholder="Введите описание товара"
                    name="description"
                    v-model.trim="description"
                    :class="v$.description.$silentErrors.length !== 0 ? 'error' : 'invalid'"
                >
                    <span class="error-message" v-if="v$.description.$silentErrors.length !== 0">{{v$.description.$silentErrors[0].$message}}</span>
                </custom-text-area>
                <custom-input
                    :label="true"
                    title="Ссылка на изображение товара"
                    placeholder="Введите ссылку"
                    name="link"
                    note="обязательно для заполнения"
                    v-model.trim="link_to_image"
                    :class="v$.link_to_image.$silentErrors.length !== 0 ? 'error' : 'invalid'"
                >
                    <span class="error-message" v-if="v$.link_to_image.$silentErrors.length !== 0">{{v$.link_to_image.$silentErrors[0].$message}}</span>
                </custom-input>
                <custom-input
                    :label="true"
                    title="Цена товара"
                    placeholder="Введите цену"
                    name="price"
                    note="обязательно для заполнения"
                    v-model.trim="price"
                    :class="v$.price.$silentErrors.length !== 0 ? 'error' : 'invalid'"
                >
                    <span class="error-message" v-if="v$.price.$silentErrors.length !== 0">{{v$.price.$silentErrors[0].$message}}</span>
                </custom-input>
                <button 
                    class="form-button" 
                    :class="v$.price.$silentErrors.length === 0 ? 'invalid' : ''"
                    @click="sendForm"
                    >Добавить товар</button>
            </form-default-template>

            <div v-if="products.length >= 1" class="products">
                <select v-model="sort_selected" class = "sort" name="" id="">
                    <option value="" selected disabled hidden>Выберите сортировку</option>
                    <optgroup label="По цене">
                        <option value="price_min">min</option>
                        <option value="price_max">max</option>
                    </optgroup>
                    <optgroup label="Другое">
                        <option value="name">по имени</option>
                    </optgroup>
                </select>
                <ul class="products-list">
                    <li v-for="(product, index) in products" :key="product.id" class = "product">
                        <div class="product__image">
                            <img :src="product.link_to_image" :alt="product.name">
                        </div>
                        <div class="product__info">
                            <h2 class="product__title">{{product.name.substr(0, 20)}}</h2>
                            <p class = "product__description">{{product.description}}</p>
                            <span class = "product__price">{{product.price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}} руб.</span>
                        </div>
                        <ul class="actions">
                            <li 
                                @click="removeProduct(product, index)" 
                                class = "action"
                                v-bind:title="`Удалить`"
                                >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12_171)">
                                        <path d="M10.207 5.79681C10 5.79681 9.83228 5.96455 9.83228 6.17152V13.2535C9.83228 13.4603 10 13.6282 10.207 13.6282C10.4139 13.6282 10.5817 13.4603 10.5817 13.2535V6.17152C10.5817 5.96455 10.4139 5.79681 10.207 5.79681Z" fill="white"/>
                                        <path d="M5.78535 5.79681C5.57838 5.79681 5.41064 5.96455 5.41064 6.17152V13.2535C5.41064 13.4603 5.57838 13.6282 5.78535 13.6282C5.99232 13.6282 6.16006 13.4603 6.16006 13.2535V6.17152C6.16006 5.96455 5.99232 5.79681 5.78535 5.79681Z" fill="white"/>
                                        <path d="M2.56301 4.76329V13.9953C2.56301 14.5409 2.76309 15.0534 3.11262 15.421C3.46054 15.7898 3.94473 15.9991 4.45147 15.9999H11.541C12.0479 15.9991 12.5321 15.7898 12.8799 15.421C13.2294 15.0534 13.4295 14.5409 13.4295 13.9953V4.76329C14.1243 4.57887 14.5745 3.90762 14.4816 3.19465C14.3885 2.48183 13.7812 1.94861 13.0622 1.94846H11.1438V1.48008C11.146 1.0862 10.9902 0.707978 10.7114 0.429729C10.4326 0.151627 10.0538 -0.00323193 9.65988 -1.18018e-05H6.33261C5.93873 -0.00323193 5.55992 0.151627 5.28109 0.429729C5.00225 0.707978 4.84652 1.0862 4.84871 1.48008V1.94846H2.93025C2.21128 1.94861 1.60399 2.48183 1.5109 3.19465C1.41796 3.90762 1.86819 4.57887 2.56301 4.76329V4.76329ZM11.541 15.2505H4.45147C3.81081 15.2505 3.31242 14.7002 3.31242 13.9953V4.79623H12.6801V13.9953C12.6801 14.7002 12.1817 15.2505 11.541 15.2505ZM5.59812 1.48008C5.59564 1.28497 5.67233 1.09717 5.8108 0.959441C5.94912 0.821707 6.13735 0.746034 6.33261 0.7494H9.65988C9.85514 0.746034 10.0434 0.821707 10.1817 0.959441C10.3202 1.09703 10.3969 1.28497 10.3944 1.48008V1.94846H5.59812V1.48008ZM2.93025 2.69787H13.0622C13.4348 2.69787 13.7367 2.99983 13.7367 3.37234C13.7367 3.74485 13.4348 4.04681 13.0622 4.04681H2.93025C2.55774 4.04681 2.25578 3.74485 2.25578 3.37234C2.25578 2.99983 2.55774 2.69787 2.93025 2.69787V2.69787Z" fill="white"/>
                                        <path d="M7.99629 5.79681C7.78932 5.79681 7.62158 5.96455 7.62158 6.17152V13.2535C7.62158 13.4603 7.78932 13.6282 7.99629 13.6282C8.20326 13.6282 8.371 13.4603 8.371 13.2535V6.17152C8.371 5.96455 8.20326 5.79681 7.99629 5.79681Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12_171">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                        </ul>
                    </li>
                </ul> 
            </div>
            <div v-else class="empty">
                <p>Товаров не добавлено</p>
            </div>
        </div>

        <message-template />
    </div>
</template>

<script>
// @ is an alias to /src
import FormDefaultTemplate from '@/components/FormDefaultTemplate.vue'
import CustomInput from '@/components/CustomInput.vue'
import CustomTextArea from '@/components/CustomTextArea.vue'
import MessageTemplate from '@/components/MessageTemplate.vue'
// Form Validator
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, minValue} from '@vuelidate/validators'
//
export default {
    name: 'Add',
    computed : {
        products () {
            switch (this.sort_selected) {
                case 'price_max': 
                    this.$store.getters.sortedByPriceMax;
                    break;
                case 'price_min':
                    this.$store.getters.sortedByPriceMin;
                    break
                case 'name':
                    this.$store.getters.sortedByName;
                    break
                default: this.$store.getters.products;
            }
            return this.$store.getters.products
        },
    },
    setup () {
        return { v$: useVuelidate() }
    },
    data () {
        return {
            name : '',
            description : '',
            link_to_image : '',
            price : '',
            sort_selected : '',  
        }
    },
    validations () {
        return {
            name: { required, maxLength : maxLength(50)}, 
            description: { required, minLength: minLength(10)}, 
            link_to_image: {required, minLength},
            price: { required, minValue : minValue(1)}
        }
    },

    methods : {
        // Если данные с базы то async - await добавить надо)
        sendForm () {
            if (this.v$.$silentErrors.length !== 0) {
                this.$store.dispatch('appendMessage', {type : 'error', text: `Поля не валидны`});
            } else {
                this.$store.dispatch('setProduct', { 
                    name : this.name,
                    description : this.description,
                    link_to_image : this.link_to_image,
                    price : this.price
                });
                this.clear_form();
                this.$store.dispatch('appendMessage', {type : 'success', text: `Товар ${this.name} успешно добавлен`});
            }
        }, 
        clear_form () {
            this.name = '';
            this.description = '';
            this.link_to_image = '';
            this.price = '';
        },
        removeProduct (product, index) {
            let remove_product = {
                data : product,
                index,
            }
            this.$store.dispatch('removeProduct', remove_product);
        },
    },
    components: {
        FormDefaultTemplate,
        MessageTemplate,
        CustomTextArea,
        CustomInput,
    }
}
</script>
<style lang="scss" scoped>
@mixin SettingFlex($direction, $justCont, $alighItems, $wrap) {
    display: flex;
    flex-direction: $direction;
    justify-content: $justCont;
    align-items: $alighItems;
    flex-wrap: $wrap;
}
@mixin StyleCard($background, $textColor, $padding, $margin, $width, $countForOneLine) {
    background: $background;
    color:$textColor;
    padding:$padding;
    margin:$margin;
    width: ($width / $countForOneLine) - 1.13333;
}
.error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}
.adding {
    display: flex;
    flex-direction: row;
}
.products {
    width: 67%;
}
.products-list {
    @include SettingFlex(row, inherit, inherit, wrap);
}
.empty {
    width: 100%;
    @include SettingFlex(column, center, center, inherit);
    display: flex;
    justify-content: center;
    align-items: center;
}
.product {
    display: flex;
    flex-direction: column;
    position: relative;
    @include StyleCard(transparent, inherit, 0, 0 1.7% 1.7% 0, 100%, 3);

    &:nth-child(3n) {
        margin-right: 0;
    }

    &:hover .actions {
        opacity: 1;
        transition: all ease 0.5s;
    }

    &__image {
        width: 100%;
        max-height: 150px;
        background: var(--gray);
        & img {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            object-fit: contain;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: var(--white);
        padding: 16px 16px 24px 16px;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
    }
    &__title {
        font-size: 20px;
        line-height: 1.3;
        color : var(--black);
        margin-bottom: 16px;
    }
    &__description {
        line-height: 1.2;
        margin-bottom: 16px;
        max-height: 57px;
        overflow : auto;
    }
    &__price {
        font-weight: 600;
        font-size: 24px;
        color : var(--black);
        line-height: 1.3;
        margin-top: auto;
    }
}
.actions {
    position: absolute;
    display: flex;
    flex-direction: row;
    right: -10px;
    top: -10px;
    opacity: 0;
    cursor: pointer;
}
.action {
    background: #FF8484;
    padding: 8px;
    border-radius: 10px;
    display: flex;
    align-items: center;
}
.search {
    display: flex;
    flex-direction: row;
    &-icon {
        padding: 8px;
        background: #FFA500;
        border-radius: 0px 5px 5px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.sort {
    width: 100%;
    margin-bottom: 15px;
    padding: 5px 10px;
    border: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    & option {
        padding: 5px;
    }
}
@media (max-width : 1366px) {
    .product {
        @include StyleCard(transparent, inherit, 0, 0 1.7% 1.7% 0, 100%, 2);
        &:nth-child(2n) {
            margin-right: 0 !important;
        }
        &:nth-child(3n) {
            margin-right: 1.7%;
        }
    }
}
@media (max-width : 900px) {
    .product {
        width: 100%;
        &:nth-child(2n) {
            margin-right: 0 !important;
        }
        &:nth-child(3n) {
            margin-right: 0 !important;
        }
    }
    .adding {
        flex-direction: column;
    }
    .products {
        width: 100%;
    }
    .actions {
        top: 0;
        right: 0;
        padding: 15px;
    }
}
</style>
