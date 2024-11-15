import dotEnv from 'dotenv'
import fs from 'fs-extra'
import path from 'path';

const appDir = fs.realpathSync(process.cwd())
const resolveEnv = (...p:string[]) => path.resolve(appDir, ...p)

async function defEnv() {
    // if (!process.env.NODE_ENV) return
    const defaultEnvFile = '.env'
    // 定义优先级
    const priority = ['.env', '.env.','.env.local']
    const envFileList = (await fs.readdir(appDir)).filter(f => f.startsWith('.env')).sort((a, b) => {
        const bIndex =priority.findIndex(p => b.startsWith(p))
        const aIndex =priority.findIndex(p => a.startsWith(p))
        return aIndex - bIndex
    })
    dotEnv.config({
        path: envFileList.map(f => resolveEnv(f)),
        override: true
    })
}

await defEnv()