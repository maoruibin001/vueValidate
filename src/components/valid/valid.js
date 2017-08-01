/**
 * Created by lenovo on 2017/7/31.
 */
import $ from 'jquery';
import './valid.css';

function trim(str) {
    return str.replace(/^\s|\s$/, '');
}
function after(newElemnet, targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
        parent.appendChild(newElemnet);
    } else {
        parent.insertBefore(newElemnet, targetElement.nextSibling);
    }
}

function removeAllClass(className) {
    let tip = document.getElementsByClassName(className);
    if (tip.length < 1) return;
    tip = [].slice.apply(tip);
    tip.forEach(function(e) {
        remove(e);
    })
}

function addClass(ele, className) {
    if (className && ele.className.indexOf(className) === -1) {
        ele.className += ' ' + className;
    }
}

function removeClass(ele, className) {
    if (className && ele.className.indexOf(className) !== -1) {
        ele.className = trim(ele.className.replace(className, ''));
    }
}


function remove(e) {
    e.parentNode.removeChild(e);
}
export default {
    check (fieldRulls, data, ref) {
        let ret = {}, fildRullList = fieldRulls || [], inValid = false;
        removeAllClass('error_tip');
        fildRullList.forEach(function (e) {
            if (!ref[e.name])return;
            let val = data[e.name];
            if (e.rex && !e.rex.test(val) && val) {
                ret[e.name] = e.err || '';
                addClass(ref[e.name], 'border-red');
                inValid = true;
            }
            if (e.require && !val) {
                ret[e.name] = e.emptyErr || (e.label ? (e.label + '不能为空') : '') || '';
                addClass(ref[e.name], 'border-red');
                inValid = true;
            }
            ref[e.name].addEventListener('focus', function() {
                if (this.nextSibling && this.nextSibling.className === 'error_tip') {
                    remove(this.nextSibling);
                }
                removeClass(this, 'border-red');
            })
            if (inValid) {
                let span = document.createElement('span');
                span.className = "error_tip";
                span.innerHTML = ret[e.name] || '';
                after(span, ref[e.name]);
            }
        });
        return inValid ? ret : null;

    }
}
