/**
 * Created by lenovo on 2017/8/1.
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
            if (this.params.isCheckBox) {
                item.checked = item.checked ? false : true;
                this.activeItems = this.params.list.filter(function(e) {
                    return e.checked === true;
                })
            } else {
                item.checked = true;
                this.activeItems = [item];
            }

            console.log(this.activeItems)
        }
    },
    watch: {
        'params.list'() {
            this.$nextTick(function() {
                if(this.params.show) {
                    var x=document.getElementById('myTable').rows[this.params.list.length + 1].cells;
                    x[0].colSpan=this.params.list.length;
                }
            })
        },
        'params.show'() {
            if (this.params.show) {
                this.params.list.forEach(e => e.checked = false);
                this.activeItems = [];
            }
        }
    }
};