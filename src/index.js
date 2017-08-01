/**
 * Created by lenovo on 2017/7/31.
 */
import Valid from './components/valid/valid';
import Vue from 'vue';
import tpl from './index.tpl';
import cusTable from './components/table/table';

const FIELDRULLS = [
    {
        require: true,
        name: 'name',
        label: '姓名'
    },
    {
        require: false,
        name: 'age',
        rex: /^\d{2,}$/,
        err: '年龄必须是两位以上数字'
    },
]
new Vue({
    el: '#app',
    template: tpl,
    components: {
        cusTable
    },
    data:  function() {
        return {
            chooseData: '',
            formData: {
                age: '',
                name: ''
            },
            invalids: {
            },
            params: {
            }
        }
    },
    methods: {
        save: function() {
            setTimeout(() => {
                this.params = {
                    show: !this.params.show,
                    hasSerial: true,
                    isCheckBox: true,
                    list: [
                        {name: '毛瑞彬', age: '20', job: '学生', hobby: '编程'},
                        {name: '毛', age: '25', job: '程序员'},
                        {name: '毛', age: '25', job: '才'},
                        {name: '毛', age: '25', job: '才'},
                        {name: '毛', age: '25', job: '才'},
                    ],
                    captionList: [
                        {name: 'name', value: '姓名'},
                        {name: 'age', value: '年龄'},
                        {name: 'job', value: '工作'},
                        {name: 'hobby', value: '爱好'}
                    ],
                    buttonList: [
                        {name: 'ok', value: '确定', cb: (data) => {
                            this.chooseData = data.length;
                            this.params.show = false;
                        }},
                        {name: 'cancel', value: '取消', cb: () => {
                            this.params.show = false;
                        }},
                    ]
                }
            }, 0)

            // this.invalids = Valid.check(FIELDRULLS, this.formData, this.$refs);
            console.log(Valid.check(FIELDRULLS, this.formData, this.$refs))
        },
    }
});