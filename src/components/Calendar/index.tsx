import { View, Text, FlatList } from "react-native";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { styles } from "./style";

export default function Calendar() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  const shortWeekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

  function getCurrentWeek(): string[] {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay(); // Sunday is 0, Monday is 1, and so on...
    const days = [];

    // Calculate the start and end dates of the current week
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDayOfWeek + 1); // Start from Monday
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6); // End on Sunday

    // Generate an array of dates for the current week
    for (let i = startDate.getDate(); i <= endDate.getDate(); i++) {
      days.push(String(i));
    }

    return days;
  }

  function currentDayWeek(week: string): boolean {
    const currentDate = new Date();
    const currentWeekDay = shortWeekdays[currentDate.getDay() - 1];

    if (week === currentWeekDay) {
      return true;
    }

    return false;
  }

  function currentDayMonth(day: string): boolean {
    const currentDate = new Date();
    const currentDayMonth = String(currentDate.getDate());
    if (day === currentDayMonth) {
      return true;
    }

    return false;
  }

  const renderItem = ({ item }: { item: string }) => (
    <View>
      <Text
        style={[
          styles.weekDays,
          currentDayWeek(item) && {
            color: "#4AB584",
          },
        ]}
      >
        {item}
      </Text>
    </View>
  );

  const renderItemDay = ({ item }: { item: string }) => (
    <View>
      <Text
        style={[
          styles.days,
          currentDayMonth(item) && {
            color: "#4AB584",
          },
        ]}
      >
        {item}
      </Text>
    </View>
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          data={shortWeekdays}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 26 }} />}
        />
        <FlatList
          data={getCurrentWeek()}
          renderItem={renderItemDay}
          keyExtractor={(item) => item}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 34 }} />}
        />
      </View>
    </>
  );
}
