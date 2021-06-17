const unique = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

const uniqueBySet = (arr) => {
    return [...new Set(arr)];
};

export {
    unique,
    uniqueBySet
}
