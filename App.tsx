import { StatusBar } from "expo-status-bar";
import { Auth } from "./src/routes/auth.stack";
import "react-native-gesture-handler";

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Auth />
    </>
  );
}
