//修改json文件
import FS from 'fs';
export const ReadJsonFile = function (filePath) {
    return JSON.parse(FS.readFileSync(filePath, 'utf-8'));
};
export const WriteJsonFile = function (filePath, data) {
    return FS.writeFileSync(filePath, JSON.stringify(data, null, 2));
};