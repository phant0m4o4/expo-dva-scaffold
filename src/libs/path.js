import path from 'path'
import { fileURLToPath } from 'url'
export const GetFilePath = (importMetaUrl)=> fileURLToPath(importMetaUrl)
export const GetDirPath = (importMetaUrl)=>path.dirname(fileURLToPath(importMetaUrl))