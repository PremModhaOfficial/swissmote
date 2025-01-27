import { IconSymbol } from "@/app-example/components/ui/IconSymbol";
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
const SELECTED_COLOR = "lightblue";

const Tabslayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    borderTopColor: "#0061ff1a",
                    borderTopWidth: 1,
                    minHeight: 70,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "today",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <Ionicons color={focused ? SELECTED_COLOR : "gray"} size={26} name="calendar-outline" />,
                }}
            />
            <Tabs.Screen
                name="insights"
                options={{
                    title: "insights",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <AntDesign name="appstore-o" size={26} color={focused ? SELECTED_COLOR : "gray"} />
                }}
            />
            <Tabs.Screen
                name="secret-chat"
                options={{
                    title: "secret-chat",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <Entypo name="mask" size={26} color={focused ? SELECTED_COLOR : "gray"} />
                }}
            />
            <Tabs.Screen
                name="messages"
                options={{
                    title: "messages",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <AntDesign color={focused ? SELECTED_COLOR : "gray"} size={26} name="message1" />,
                }}
            />
            <Tabs.Screen
                name="invite"
                options={{
                    title: "invite",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <Ionicons color={focused ? SELECTED_COLOR : "gray"} size={26} name="people-outline" />,
                }}
            />
        </Tabs>
    );
};

export default Tabslayout;
