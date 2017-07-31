/**
 * Created by lenovo on 2017/7/31.
 */
import $ from 'jquery';
import './valid.css';

export default {
    check (fieldRulls, data, ref) {
        let ret = {};
        $('.error_tip').remove();
        let fildRullList = fieldRulls || [];
        fildRullList.forEach(function (e) {
            if (!ref[e.name])return;
            let val = data[e.name];
            if (e.rex && !e.rex.test(val)) {
                ret[e.name] = e.err;
            } else if (e.require && !val) {
                ret[e.name] = e.emptyErr || e.label + '不能为空';
            }
            if (!ret[e.name]) return;
            $(ref[e.name]).on('focus', function () {
                $(this).next('.error_tip').remove();
                $(ref[e.name]).removeClass('border-red');
            })
            $(ref[e.name]).after($('<span class="error_tip">'+ret[e.name]+'</span>'));
            $(ref[e.name]).addClass('border-red');
        });
    }
}
