import HomeRoute from "./src/routes/Route";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppProviders } from "./src/routes/ContextProviders";

import Favoritos from "./src/pages/Favoritos";
import VistoPorUltimo from "./src/pages/VistoPorUltimo";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <AppProviders>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={HomeRoute}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="Favoritos"
            component={Favoritos}
            options={{
              tabBarLabel: "Bookmarked",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="Visto por ultimo"
            component={VistoPorUltimo}
            options={{
              tabBarLabel: "Visto por ultimo",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="clockcircleo" color={color} size={size} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProviders>
  );
}
