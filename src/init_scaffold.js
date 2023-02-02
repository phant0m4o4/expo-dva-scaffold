import FSE from 'fs-extra';
import {execaCommandSync} from 'execa';
import {ReadJsonFile,WriteJsonFile} from './libs/json.js';
import {GetDirPath} from "./libs/path.js";
import path from "path";
const dirPath = GetDirPath(import.meta.url);
const modulePath = path.normalize(`${dirPath}/../`);
const projectPath = path.normalize(`${modulePath}/../../`);
execaCommandSync("npx expo install dva-core@2.0.4 dva-loading@3.0.22 dva-immer@1.0.0 redux react-redux"
    +" react-native-screens react-native-safe-area-context"
    +" @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @rneui/themed"
    +" @rneui/base @expo/vector-icons",{shell:true});
FSE.copySync(modulePath+"templates/init/",projectPath,{overwrite:true});
FSE.moveSync(projectPath+"assets",projectPath+"src/assets");

const packageJson = ReadJsonFile(projectPath+'package.json');
packageJson.scripts["eas-build-pre-install"]="npm config set legacy-peer-deps true";
WriteJsonFile(projectPath+'package.json',packageJson);
const appJson = ReadJsonFile(projectPath+'app.json');
appJson.expo.icon="./src/assets/icon.png";
appJson.expo.splash.image="./src/assets/splash.png";
appJson.expo.android.adaptiveIcon.foregroundImage="./src/assets/adaptive-icon.png";
appJson.expo.web.favicon="./src/assets/favicon.png";
appJson.expo.userInterfaceStyle= "automatic";
WriteJsonFile(projectPath+'app.json',appJson);