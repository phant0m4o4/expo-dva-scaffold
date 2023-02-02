import {ReadJsonFile,WriteJsonFile} from './libs/json.js';
const packageJson = ReadJsonFile('../../package.json');
packageJson.scripts["init-scaffold"]="node ./node_modules/expo-dva-scaffold/src/init_scaffold.js";
WriteJsonFile('../../package.json',packageJson);