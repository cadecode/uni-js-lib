const addEventProxy = (parentSelector, targetSelector, eventType, fn) => {
    // 获取父级元素
    const pElements = document.querySelectorAll(parentSelector);
    // 定义事件代理函数
    const handler = function (ev) {
        const target = ev.target;
        if (target.matches(targetSelector)) {
            fn.call(target, ev);
        }
    };
    // 绑定事件代理函数
    pElements.forEach((pElement) => {
        pElement.addEventListener(eventType, handler);
    });
    // 返回事件代理函数，便于解绑
    return handler;
};

const removeEventProxy = (parentSelector, targetSelector, eventType, fn) => {
    // 获取父级元素
    const pElements = document.querySelectorAll(parentSelector);
    // 遍历绑定代理事件
    pElements.forEach((pElement) => {
        pElement.removeEventListener(eventType, fn);
    });
};

export {
    addEventProxy,
    removeEventProxy
};
