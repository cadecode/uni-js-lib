/**
 * 数组打乱
 * @param arr
 */
const shuffle = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [arr[random], arr[i]] = [arr[i], arr[random]];
    }
    return arr;
};

export { shuffle };
