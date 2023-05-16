import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import AddTask from "../screens/AddTask";

const { Navigator: BottomNavigator, Screen: BottomScreen } =
  createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <BottomNavigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          height: 70,
          backgroundColor: "#303030",
          borderRadius: 20,
          paddingBottom: 4,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: React.ComponentProps<typeof Feather>["name"] =
            "activity";
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Noti":
              iconName = "bell";
              break;
            case "Agenda":
              iconName = "calendar";
              break;
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4AB584",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <BottomScreen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <BottomScreen
        options={{ headerShown: false }}
        name="Noti"
        component={Home}
      />
      <BottomScreen
        options={{ headerShown: false }}
        name="Agenda"
        component={Home}
      />
      <BottomScreen
        name="AddTask"
        component={AddTask}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
          headerShown: false,
        })}
      />
    </BottomNavigator>
  );
}
