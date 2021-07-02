import { getScrollOffset } from './scrollOffset';

const getElementPosition = (el) => {
    let parent = el.offsetParent,
        top = el.offsetTop,
        left = el.offsetLeft;
    while (parent) {
        top += parent.offsetTop;
        left += parent.offsetLeft;
        parent = parent.offsetParent;
    }
    return {
        top: top,
        left: left
    };
};

const getMousePosition = (ev) => {
    const sTop = getScrollOffset().top,
        sLeft = getScrollOffset().left,
        cTop = document.documentElement.clientTop || 0,
        cLeft = document.documentElement.clientLeft || 0;
    return {
        X: ev.clientX + sLeft - cLeft,
        Y: ev.clientY + sTop - cTop
    };
};

export {
    getElementPosition,
    getMousePosition
};
