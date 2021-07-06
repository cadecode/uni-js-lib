const getElementStyle = function (el) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(el, null);
    } else {
        // 兼容 IE8 及以下
        el.currentStyle = el.currentStyle || {};
        return el.currentStyle;
    }
};

export {
    getElementStyle
};
