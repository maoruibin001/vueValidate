/**
 * Created by lenovo on 2017/7/31.
 */
import Valid from './components/valid/valid';
import Vue from 'vue';
import tpl from './index.tpl';

const FIELDRULLS = [
    {
        require: true,
        name: 'name',
        label: '姓名'
    },
    {
        require: true,
        name: 'age',
        rex: /\d{2,}/,
        err: '年龄必须是两位以上数字'
    },
]
new Vue({
    el: '#app',
    // template: tpl,
    data:  function() {
        return {
            formData: {
                age: '',
                name: ''
            },
            invalids: {
            }
        }
    },
    methods: {
        save: function() {
            this.invalids = Valid.check(FIELDRULLS, this.formData, this.$refs);
        },
    }
});