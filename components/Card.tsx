import React from "react";
import { View } from "react-native";

// import { Container } from './styles';
type FloatingCardProps = {
    children?: React.ReactNode;
    className?: string;
};
function FloatingCard({ children, className }: FloatingCardProps) {
    return (
        <View
            className={`bg-white  rounded-md  ${className}`}
        >
            {children}
        </View>
    );
}

export default FloatingCard;
