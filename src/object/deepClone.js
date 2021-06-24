function deepClone(origin) {
    const target = Array.isArray(origin) ? [] : {};
    for (let key in origin) {
        if (!origin.hasOwnProperty(key)) continue;
        if (typeof origin[key] === 'object') {
            target[key] = deepClone(origin[key]);
            continue;
        }
        target[key] = origin[key];
    }
    return target;
}

export {
    deepClone
};
