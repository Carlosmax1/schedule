import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./stack.routes";

export function Auth() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
