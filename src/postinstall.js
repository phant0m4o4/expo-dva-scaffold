import {ReadJsonFile,WriteJsonFile} from './libs/json.js';
const packageJson = ReadJsonFile('../../package.json');
packageJson.scripts["init-scaffold"]="node ./node_modules/expo-dva-scaffold/src/init_scaffold.js";
// packageJson.dependencies={
//     ...packageJson.scripts["dependencies"],
//     "@expo/vector-icons": "^13.0.0",
//     "@react-navigation/bottom-tabs": "^6.5.4",
//     "@react-navigation/native": "^6.1.3",
//     "@react-navigation/native-stack": "^6.9.9",
//     "@rneui/base": "^4.0.0-rc.7",
//     "@rneui/themed": "^4.0.0-rc.7",
//     "dva-core": "2.0.4",
//     "dva-immer": "1.0.0",
//     "dva-loading": "3.0.22",
//     "react-native-safe-area-context": "4.4.1",
//     "react-native-screens": "~3.18.0",
//     "react-redux": "^8.0.5",
//     "redux": "^4.2.1",
// }
WriteJsonFile('../../package.json',packageJson);