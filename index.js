module.exports = ({ types: t }) => {
    return {
        visitor: {
            Identifier(path) {
                //判断父节点是if
                const parentIsIf = t.isIfStatement(path.parentPath);
                //判断当前节点的name是否是DEBUG
                const isDebug = path.node.name === 'DEBUG';
                if (isDebug && parentIsIf) {
                    //把Identifier 转换为 string
                    const stringNode = t.stringLiteral("DEBUG");
                    path.replaceWith(stringNode);
                }
            },
            Literal(path) {
                //判断父节点是if
                const parentIsIf = t.isIfStatement(path.parentPath);
                //判断当前节点的value是否是DEBUG
                const isDebug = path.node.value === 'DEBUG';
                if (isDebug && parentIsIf) {
                    //判断当前环境是生产环境
                    if(process.env.NODE_ENV === 'production'){
                        // 移除代码块
                        path.parentPath.remove();
                    }
                }
            }

        },
    }
}