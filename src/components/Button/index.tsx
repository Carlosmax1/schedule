import React from "react";
import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";

import { styles } from "./style";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  iconName?: keyof typeof AntDesign.glyphMap;
  color?: string;
};

export default function Button({
  title,
  isLoading = false,
  iconName,
  disabled,
  color,
  ...rest
}: Props) {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        disabled={isLoading || disabled}
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator color="#111" />
        ) : (
          <View style={styles.content}>
            {iconName && <AntDesign size={28} color="#fff" name={iconName} />}
            <Text style={[styles.text, { color: color }]}>{title}</Text>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}
