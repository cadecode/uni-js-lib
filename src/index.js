import arrayLib from './array';
import domLib from './dom';
import funcLib from './function';
import objectLib from './object';

/**
 * 测试方法
 */
function logUniJsLib() {
    console.log('[uni-js-lib] loaded successfully.');
}

export default {
    logUniJsLib,
    ...arrayLib,
    ...domLib,
    ...funcLib,
    ...objectLib
};
