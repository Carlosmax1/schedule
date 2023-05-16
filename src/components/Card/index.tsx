import { View, Text, Image, TouchableOpacity, ViewProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { styles } from "./style";

type CardProps = ViewProps & {
  active?: boolean;
  color?: string;
  data?: {
    title: string;
    time: string;
    user: {
      avatar: string;
      name: string;
    };
  };
};

export default function Card({ active, color, data, ...rest }: CardProps) {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View {...rest} style={styles.container}>
        <Text style={styles.title}>Lavar Roupa</Text>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <AntDesign name="clockcircle" color="#f9f9f9f9" size={20} />
            <Text style={styles.time}>09:00</Text>
          </View>
          <View style={styles.info}>
            <Image
              source={{ uri: "https://github.com/carlosmax1.png" }}
              style={{ width: 20, height: 20, borderRadius: 20 }}
            />
            <Text style={styles.time}>Carlos</Text>
          </View>
        </View>
        <Ionicons
          style={{
            position: "absolute",
            right: 30,
            transform: [
              {
                translateY: 30,
              },
            ],
            opacity: 0.3,
          }}
          name="shirt"
          size={100}
          color="#d3d3d3"
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </TouchableOpacity>
      </View>
    </>
  );
}
