const getScrollOffset = () => {
    if (window.pageYOffset) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        };
    }
    return {
        top: document.body.scrollTop || document.documentElement.scrollTop,
        left: document.body.scrollLeft || document.documentElement.scrollLeft
    };
};

export {
    getScrollOffset
};
