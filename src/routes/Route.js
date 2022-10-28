import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";
import VistoPorUltimo from "../pages/VistoPorUltimo";

export default function HomeRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Homepage" component={Home} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Favoritos" component={Favoritos} />
      <Stack.Screen name="VistoPorUltimo" component={VistoPorUltimo} />
    </Stack.Navigator>
  );
}
