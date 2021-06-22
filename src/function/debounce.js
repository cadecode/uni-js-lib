/**
 * 防抖函数：每一次的高频触发只执行一次
 * 核心是有计时器就清除，并开启新计时器
 * 立即执行的逻辑是执行后开启一个定时器保持不可执行状态
 *
 * @param fn 目标函数
 * @param delay 延迟时间
 * @param triggerNow 是否立即执行
 * @return {(function(): void)|*}
 */
function debounce(fn, delay, triggerNow) {
    let timer = 0;
    let executed = false;
    return function () {
        const _args = arguments;
        clearTimeout(timer);
        // 先关闭定时器
        if (triggerNow) {
            // 如果需要立即执行
            // 判断 executed 是否为 false，为 false 则执行
            // 开启新定时器防止短时间内再次触发
            if (!executed) {
                fn.apply(this, _args);
                executed = true;
            }
            timer = setTimeout(function () {
                executed = false;
            }, delay);
        } else {
            // 如果不需要立即执行
            // 每次触发开启新定时器即可
            timer = setTimeout(function () {
                fn.apply(this, _args);
            }, delay);
        }
    };
}

export {
    debounce
};
