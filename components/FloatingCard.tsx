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
            className={`bg-white shadow-xl rounded-md shadow-black ${className}`}
        >
            {children}
        </View>
    );
}

export default FloatingCard;
