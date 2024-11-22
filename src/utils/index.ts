/**
 * 类型检测
 * @param {any} obj
 */
function typeOf(obj:any) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

/**
 * 深度遍历对象
 * @param target 
 * @param cb 
 * @param level 
 * @returns 
 */
export function deepTraverse(target: Record<string, any>, cb?:(v: any, k: string, level: number) => void, level: number = 0) {
    if (typeof target !== 'object' || target === null) return
    // 遍历对象的每一个属性
    for (const [key, value] of Object.entries(target)) {
        if (target.hasOwnProperty(key)) {
            cb && cb(value, key, level);
            if (Array.isArray(value)) continue;
            deepTraverse(value, cb, level + 1);
        }
    }
}