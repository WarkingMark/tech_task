<template>

    <div class="form-box">
        <label v-if="label" class = "form-box-title">{{title}} <span class = "note">{{note}}</span></label>

        <textarea 
            :class="error ? 'not-invalid': 'invalid' "
            class = "form-text-area" 
            :type="type" 
            :name="name" 
            :placeholder="placeholder"
            :value="value"
            :pattern="pattern"
            :disabled="disabled"
            @input="changeData($event.target.value)" 
        ></textarea>
        <slot></slot>
    </div>

</template>

<script>
// @ is an alias to /src

export default {
    name: 'CustomTextArea',
    props : {
        value: {
            type : String,
            required : true
        },
        title : {
            type : String 
        },
        placeholder : {
            type : String 
        },   
        pattern : {
            type : String 
        },
        type : {
            type : String 
        },
        note : {
            type : String 
        },
        name : {
            type : String 
        },
        disabled : {
            type : String 
        },
        label : {
            type : Boolean
        },
        error : {
            type : String,
        }
    },
    methods : {
        changeData (value) {
            this.$emit('input', value)
        }
    },
}
</script>
<style lang="scss" scoped>
.form-text-area {
    background: var(--white);
    border: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid transparent;
    padding: 10px 16px;
    resize: none;
    color:#3F3F3F;
    &::placeholder {
        font-size: 12px;
        color:#B4B4B4
    }
    &:focus {
        border: 1px solid orange;
    }
    &.not-invalid {
        border : 1px solid red; 
    }
}
.form-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    &-title {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 4px;
    }
}
.form-box.error .form-text-area {
    border: 1px solid red;
}
.form-box.invalid .form-text-area {
    border: 1px solid green; 
}
.note{
    margin-top: 5px;
    font-size: 10px;
    color : red;
}
</style>
