/**
 * Created by lenovo on 2017/8/1.
 * 自动生成表格
 */
import tpl from './table.tpl';

export default {
    template: tpl,
    props: ['params'],
    data() {
        return {
            activeItems: []
        }
    },
    methods: {
        chooseItem(item) {
            // 多选框
            if (this.params.isCheckBox) {
                item.checked = item.checked ? false : true;
                this.activeItems = this.params.list.filter(function(e) {
                    return e.checked === true;
                })
            } else {
                // 单选
                item.checked = true;
                this.activeItems = [item];
            }

        }
    },
    watch: {
        'params.list'() {
            this.$nextTick(function() {
                if(this.params.show) {
                    // 最后一行只有一个td，所以要合并td
                    var x=document.getElementById('myTable').rows[this.params.list.length + 1].cells;
                    x[0].colSpan=this.params.list.length;
                }
            })
        },
        'params.show'() {
            if (this.params.show) {
                // 初始化数据
                this.params.list.forEach(e => e.checked = false);
                this.activeItems = [];
            }
        }
    }
};