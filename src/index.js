import typeLib from './type';

/**
 * 测试方法
 */
function logSimpleJsLib() {
    console.log('[simple-js-lib] loaded successfully.');
}

export default {
    logSimpleJsLib,
    ...typeLib
};
