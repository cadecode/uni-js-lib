/**
 * 数组树形化
 * @param data 数组
 * @param idKey id 的 key
 * @param pidKey 父级 id 的 key
 * @param rootId 顶级节点的父级 id
 * @returns {*} 树形数组
 */
const tree = (data, idKey, pidKey, rootId) => {
    const parent = data.filter(item => item[pidKey] === rootId);
    const children = data.filter(item => item[pidKey] !== rootId);
    parent.map(item => {
            const childrenTree = tree(children, idKey, pidKey, item[idKey]);
            if (childrenTree.length === 0) {
                return;
            }
            item.children = childrenTree;
        }
    );
    return parent;
};

export {
    tree
};
