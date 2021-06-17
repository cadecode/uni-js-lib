/**
 * 判断类型，Number/String/Null/Undefined 等
 * @param obj
 */
const typeOf = (obj) => {
    // 如 [Object Array]，截取第 8 位到最后一位（不包括最后一位），得到类型
    return Object.prototype.toString.call(obj).slice(8, -1);
};

export { typeOf };
