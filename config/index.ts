import dotEnv from 'dotenv'
import fs from 'fs-extra'
import path from 'path';

const appDir = fs.realpathSync(process.cwd())
const resolveEnv = (...p:string[]) => path.resolve(appDir, ...p)

const defaultEnvFile = '.env'
// 定义优先级
const priority = ['.env.local', '.env.', '.env']
const envFileList = (await fs.readdir(appDir)).filter(f => f.startsWith('.env')).sort((a, b) => {
    const bIndex =priority.findIndex(p => b.startsWith(p))
    const aIndex =priority.findIndex(p => a.startsWith(p))
    return aIndex - bIndex
})
const envFile = envFileList.find(f => f.includes(process.env.NODE_ENV ?? 'production')) ?? defaultEnvFile

dotEnv.config({
    path: [resolveEnv(envFile), resolveEnv(defaultEnvFile)]
})