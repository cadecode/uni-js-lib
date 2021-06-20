const hasClass = (el, cls) => {
    return new RegExp('(\\b|^)' + cls + '(\\b|$)').test(el.className);
};

const addClass = (el, cls) => {
    if (!hasClass(el, cls)) {
        console.log(el.className, cls)
        el.className = el.className + ' ' + cls;
    }
};

const removeClass = (el, cls) => {
    if (hasClass(el, cls)) {
        const reg = new RegExp('(\\b|^)' + cls + '(\\b|$)', 'g');
        el.className = el.className.replace(reg, '').trim();

    }
};

const toggleClass = (el, cls) => {
    if (!hasClass(el, cls)) {
        el.className = el.className.trim() + ' ' + cls;
    } else {
        const reg = new RegExp('(\\b|^)' + cls + '(\\b|$)', 'g');
        el.className = el.className.replace(reg, '').trim();
    }
};
export {
    hasClass,
    addClass,
    removeClass,
    toggleClass
}
