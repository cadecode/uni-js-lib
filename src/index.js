import typeLib from './type';
import arrayLib from './array';
import domLib from './dom';
import funcLib from './function';

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
    ...funcLib
};
