cd ../../
npx expo install dva-core@2.0.4 dva-loading@3.0.22 dva-immer@1.0.0 redux react-redux
# react native 基础组件
npx expo install react-native-screens react-native-safe-area-context
# react navigation
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
# react native elements
npx expo install @rneui/themed @rneui/base @expo/vector-icons
cp -rf ./node_modules/expo-dva-scaffold/templates/init/ ./
mv ./assets/ ./src/assets/
node ./node_modules/expo-dva-scaffold/src/modify_config.js