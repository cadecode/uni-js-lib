/**
 * 节流函数：高频触发时，按指定间隔执行
 * 核心是有计时器就 return
 *
 * @param fn 目标函数
 * @param interval 时间间隔
 * @return {(function(): void)|*}
 */
function throttle(fn, interval) {
    let timer = 0;

    return function () {
        const _args = arguments;

        // 有定时器则返回
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, _args);
            timer = 0;
        }, interval);
    };
}

export {
    throttle
};
