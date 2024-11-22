import path from "node:path";
import fse from 'fs-extra'
import type { Context } from "hono";
import qs from "qs";
import { deepTraverse } from "@/utils";

type ImportedNodeModule<D, M extends { default: D } = { default: D }, K extends keyof M = keyof M> = {
    [P in K]: M[P];
};

/**
 * Import all modules in path folder
 */
export async function importModule<D = any>(p: string, options:{
    exclude?:string[],
    include?:string[],
    isDirectory?:boolean,
    each?: (res: { name: string, module:ImportedNodeModule<D> }) => void
} = {}) {
    const modulesList:Promise<{ name: string, module:ImportedNodeModule<D> }>[] = [];
    const folderPath = path.resolve(process.cwd(), p)
    // const modulesPath = (await fse.readdir(folderPath, { withFileTypes: true })).reduce<string[]>((res, f) => {
    //     f.isDirectory() && res.push(f.name)
    //     return res
    // }, [])
    // modulesPath.forEach(m => {
    //     modulesList.push(
    //         import('file://' + path.resolve(folderPath, m, 'index.ts')).then(nm => {
    //             const res = { name: m, module: nm }
    //             options.each && options.each(res)
    //             return res
    //         }),
    //     )
    // })
    return await Promise.all(modulesList)
}

enum FilterMap {
    $eq = 'equals',
    $eqi = '',
    $ne = 'not',
    $nei = '',
    $lt = 'lt',
    $lte = 'lte',
    $gt = 'gt',
    $gte = 'gte',
    $in = 'in',
    $notIn = 'notIn',
    $contains = 'contains',
    $containsi = '',
    $notContains = '',
    $notContainsi = '',
    $null = '',
    $notNull = '',
    $between = '',
    $startsWith = 'startsWith',
    $endsWith = 'endsWith',
    $or = 'OR',
    $and = 'AND',
    $not = 'NOT',
    /** preview feature */
    $search = 'search'
}
function filtersDecoder(str: string) {
    if (!str.startsWith('filters')) return str;
    console.log('str:::', str);
    return str.replace(/\[(\$\w+)\]/g, (reg, g) => {
        console.log('g:', g);
        return `[${FilterMap[g as keyof typeof FilterMap] ?? g}]`;
    })
}

export function parseQuery<C extends Context, T = string>(ctx:C, key:string):(T extends string ? string : T) | undefined;
export function parseQuery<C extends Context>(ctx:C):Record<string, any>;
export function parseQuery<C extends Context>(ctx:C, key?:string) {
    const searchIndex = ctx.req.url.indexOf('?', 8)
    if (searchIndex === -1) return undefined;
    const searchParams = ctx.req.url.slice(searchIndex + 1);
    const queries = qs.parse(searchParams, {
        decoder(str, defaultEncoder, charset, type) {
            switch(type) {
                case 'value':
                    if (/^(\d+|\d*\.\d+)$/.test(str)) {
                        return parseFloat(str)
                    }
                    break
            }
            return str;
        }
    })
    
    return key !== undefined ? queries[key] : queries;
}