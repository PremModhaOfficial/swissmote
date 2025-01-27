import { ReactNode } from "react";
import { View, Text } from "react-native";

type params = {
    children?: ReactNode;
    className?: string;
    placeholder?: boolean | string;
};

const BorderMe = ({ children, className, placeholder = false }: params) => {
    return placeholder ? <Text className={`border border-red-700 p-0 m-0 ${className}`}>{placeholder}</Text> : <View className={`border border-red-700 ${className}`}>{children}</View>;
};

export default BorderMe;
