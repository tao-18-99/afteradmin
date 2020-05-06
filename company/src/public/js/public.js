function fontRem() {
    ;
    (function (win, doc) {
        var rem = 20 / 1920 * doc.documentElement.clientWidth;
        doc.documentElement.style.fontSize = rem + 'px';
        win.addEventListener('resize', function () {
            rem = 20 / 1920 * doc.documentElement.clientWidth;
            doc.documentElement.style.fontSize = rem + 'px';
        }, false);
    })(window, document);
}
fontRem();