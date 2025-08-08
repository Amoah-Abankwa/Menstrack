import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigation";

export default function App() {
  return (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
  );
}

