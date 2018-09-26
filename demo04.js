"use strict";
function searchXiaoJieJie3() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '、';
        }
    }
    yy = yy + '的小哥哥';
    return yy;
}
var result = searchXiaoJieJie3('29岁', '大长腿', '有担当', '有智慧');
console.log(result);
