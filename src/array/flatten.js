const flatten = (arr) => {
    return arr.reduce((pre, item) => {
        if (Array.isArray(item)) {
            return [...pre, ...flatten(item)];
        } else {
            return [...pre, item];
        }
    }, [])
};

export {
    flatten
}
