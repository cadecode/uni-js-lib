const chunk = (arr, size = 1) => {
    return arr.reduce((pre, item, index) => {
        if (index % size === 0) {
            return [...pre, [item]];
        }
        pre[pre.length - 1].push(item);
        return pre;
    }, []);
};

export {
    chunk
};
