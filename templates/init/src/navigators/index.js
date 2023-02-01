import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome as Icon } from "@expo/vector-icons";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import { useTheme } from "@rneui/themed";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// tabbar 路由
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
        component={HomePage}
      />
      <Tab.Screen
        name="About"
        options={{
          headerTitle: "About",
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="address-card" color={color} size={size} />;
          },
        }}
        component={AboutPage}
      />
    </Tab.Navigator>
  );
};

// 根路由
const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        options={{
          headerShown: false,
        }}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};
const AppNavigator = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.white,
          text: theme.colors.black,
        },
        mode: theme.mode,
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
