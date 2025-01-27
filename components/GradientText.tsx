import React from "react";
import { Text, View, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

interface GradientTextProps {
  text: string;
  innerClassName?: string;
  colors?: string[];
  style?: object;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  colors = ["green", "red"],
  style,
  innerClassName,
}) => {
  // Fallback for web or unsupported platforms
  if (Platform.OS === "web" || !MaskedView) {
    return (
      <Text
        className={`${innerClassName} text-2xl font-bold text-[${colors[0]}]`}
      >
        {text}
      </Text>
    );
  }

  return (
    <MaskedView
      maskElement={
        <View style={{ backgroundColor: "transparent" }}>
          <Text
            // style={[{ fontSize: 24, fontWeight: "bold" }, style]}
            className={`${innerClassName} `}
          >
            {text}
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        // style={{ flex: 1, width: "100%" }}
        className={`flex w-full`}
      >
        <Text
          // style={[{ fontSize: 24, fontWeight: "bold", opacity: 0 }, style]}
          className={`${innerClassName} opacity-0`}
        >
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
