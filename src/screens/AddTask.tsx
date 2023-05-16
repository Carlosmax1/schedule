import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "../styles/addTask";

export default function AddTask() {
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => nav.goBack()}
          style={styles.buttonBack}
        >
          <AntDesign name="arrowleft" color={"#111"} size={25} />
          <Text style={styles.textBack}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
