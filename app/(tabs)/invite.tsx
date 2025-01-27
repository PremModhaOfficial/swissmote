import FloatingCard from "@/components/FloatingCard";
import GradientText from "@/components/GradientText";
import { ReactNode, useState } from "react";
import { Text, View, Animated, TouchableOpacity } from "react-native";
const INVITE_STEPS = [
    [
        "Invite",
        "You need to invite your partner to flo and generate a pairity code.",
    ],
    [
        "Pair",
        "Your Partner will download the flo app and then use the code to pair your profiles.",
    ],
    [
        "Share",
        "Once the invite and pairing are done you will be sharing Flo with your partner.",
    ],
];

type CollapsedPointProps = {
    title: string;
    text: string;
};
function CollapsedPoint({ title, text }: CollapsedPointProps) {
    const [toggled, setToggled] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setToggled((prev) => !prev)}>
                <View className="flex flex-row justify-between">
                    <Text>{title}</Text>
                    <Text>↓</Text>
                </View>
            </TouchableOpacity>
            <Text className={`${toggled ? "" : "text-transparent h-0"}`}>{text}</Text>
        </View>
    );
}
type BulletPointsProps = {
    children: ReactNode;
};

function BulletPoint({ children }: BulletPointsProps) {
    const animatedValue = new Animated.Value(0);

    Animated.loop(
        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
        ]),
    ).start();

    const backgroundColor = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["#ff4c6c", "#2c046c"],
    });
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
                alignSelf: "flex-start",
            }}
        >
            <Animated.View
                className="w-6 h-6 rounded-full justify-center items-center  mx-4 my-2"
                style={{ backgroundColor }}
            >
                <Text className="text-white font-bold">✓</Text>
            </Animated.View>
            <Text>{children}</Text>
        </View>
    );
}

export default function Index() {
    return (
        <View className="bg-violet-100 h-full">
            <View className="mt-10 flex justify-center items-center p-0 bg mb-10">
                <GradientText
                    colors={["#ff4c6c", "#2c046c"]}
                    text="Flo For Partners"
                    innerClassName="text-4xl mt-1 mb-3 pb-0 font-extrabold"
                />
                <Text className="font-bold ">
                    Supercharge your relationship and sex life
                </Text>

                <Text className="mt-10 mb-5">
                    Share your cycle insigts with your partner
                </Text>
                <BulletPoint>Track your partner's cycle</BulletPoint>
                <BulletPoint>Get personalized tips</BulletPoint>
                <BulletPoint>Improve communication</BulletPoint>
            </View>
            <View className="flex justify-center items-center">
                <Text>What Your partner sees</Text>
            </View>
            <FloatingCard className="m-5 rounded-xl p-4">
                <Text className="text-xl font-bold">Your Questions answered</Text>
                <CollapsedPoint title="prem" text="modha" />
            </FloatingCard>
            <FloatingCard className="m-5 rounded-xl p-4">
                <Text className="font-bold ">Here's how to invite your partner</Text>
                {INVITE_STEPS.map(([title, description], idx) => {
                    return (
                        <View key={idx} className="flex flex-row items-center">
                            <View className="bg-red-500 w-14 h-14 m-2 rounded-full" />
                            <View>
                                <Text className="text-lg font-bold  ">
                                    {idx + 1}. {title}
                                </Text>
                                <Text className="w-full text-wrap text-sm overflow-hidden">
                                    {description}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </FloatingCard>
        </View>
    );
}
