import React, { useEffect } from "react";
import Dva from "./libs/dva";
import Models from "./models";
import { StatusBar, useColorScheme, View } from "react-native";
import AppNavigator from "./navigators";
import { Provider as ReduxProvider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ThemeProvider,
  useTheme,
  useThemeMode,
  createTheme,
} from "@rneui/themed";
const theme = createTheme({
  //在这里修改ui主题
});
// 加载dva
const dva = Dva(Models);
const store = dva.getStore();
// 亮白模式和暗黑模式
const ColorScheme = ({ children }) => {
  const colorMode = useColorScheme();
  const { theme } = useTheme();
  const { setMode } = useThemeMode();

  useEffect(() => {
    setMode(colorMode);
  }, [colorMode]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {children}
    </View>
  );
};
const App = () => {
  return (
    <ReduxProvider store={store}>
      <StatusBar />
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ColorScheme>
            <AppNavigator />
          </ColorScheme>
        </ThemeProvider>
      </SafeAreaProvider>
    </ReduxProvider>
  );
};
export default App;
