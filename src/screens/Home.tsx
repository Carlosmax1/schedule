import { Text, View, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import Button from "../components/Button";
import Calendar from "../components/Calendar";
import Card from "../components/Card";
import TimeLine from "../components/TimeLine";

import { styles } from "../styles/home";

export default function Home() {
  const nav = useNavigation();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function getCurrentWeekday() {
    const currentDate = new Date();
    const weekdayNum = currentDate.getDay();

    const weekdays = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    const currentWeekday = weekdays[weekdayNum];

    return currentWeekday;
  }

  function getCurrentDayOfMonth() {
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();

    return dayOfMonth;
  }

  function getCurrentMonth() {
    const currentDate = new Date();
    const monthNum = currentDate.getMonth();

    const months = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    const currentMonth = months[monthNum];

    return currentMonth;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.textHello}>Olá, Carlos</Text>
          <Text style={styles.textYou}>Você tem</Text>
          <Text style={styles.textTasks}>4 tarefas para hoje</Text>
        </View>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/carlosmax1.png" }}
        />
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {getCurrentWeekday()}, {getCurrentDayOfMonth()} {getCurrentMonth()}
        </Text>
        <Button
          onPress={() => nav.navigate("AddTask")}
          title="Add Task"
          iconName="plus"
          color="white"
        />
      </View>
      <View>
        <Calendar />
      </View>
      <ScrollView style={{ gap: 20 }} showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <TimeLine active />
          <Card />
        </View>
        <View style={styles.cardsContainer}>
          <TimeLine />
          <Card />
        </View>
        <View style={styles.cardsContainer}>
          <TimeLine />
          <Card />
        </View>
        <View style={styles.cardsContainer}>
          <TimeLine />
          <Card />
        </View>
        <View style={styles.cardsContainer}>
          <TimeLine />
          <Card />
        </View>
      </ScrollView>
    </View>
  );
}
