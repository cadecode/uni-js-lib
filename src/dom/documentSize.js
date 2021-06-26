/**
 * 窗口可视尺寸
 * @return {{width: number, height: number}}
 */
const getViewportSize = () => {
    if (window.innerWidth) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
    if (document.compatMode === 'BackCompat') {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    }
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };

};

/**
 * 文档尺寸
 * @return {{width: number, height: number}}
 */
const getDocumentSize = () => {
    if (document.body.scrollHeight) {
        return {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
        };
    }
    return {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight
    };
};

export {
    getViewportSize,
    getDocumentSize
};
