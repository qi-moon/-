window.onload = function () {
    // 监听滚动条滚动事件
    window.addEventListener('scroll', function (e) {
        hiddenBtn();
    });
}

// 返回顶部隐藏显示方法
function hiddenBtn() {
    // 获取按钮位置
    var rtb = document.getElementById('returnTop');
    // 获取当前滚动条所在的位置，如果大于 700 则把隐藏的按钮显示，否则隐藏
    if (document.documentElement.scrollTop > 700 || document.body.scrollTop > 700) {
        rtb.style.display = "block";
    } else {
        rtb.style.display = "none";
    }
}
