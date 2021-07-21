import arrayLib from './array';
import domLib from './dom';
import funcLib from './function';
import objectLib from './object';

/**
 * 测试方法
 */
function logSimpleJsLib() {
    console.log('[simple-js-lib] loaded successfully.');
}

export default {
    logSimpleJsLib,
    ...typeLib,
    ...arrayLib,
    ...domLib,
    ...funcLib,
    ...objectLib
};
