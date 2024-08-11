import React from "react";
import { Href, Link } from "expo-router";
import { Text } from "react-native";

interface NavButtonProps {
  screen: Href<string | object>;
  título: string;
}

const NavButton = ({ screen, título }: NavButtonProps) => {
  return (
    <Link
      href={screen}
      style={{
        backgroundColor: "#379eff",
        color: "white",
        padding: 10,
        margin: 10,
        bottom: 30,
        borderRadius: 5,
        textAlign: "center",
      }}
    >
      <Text style={{ fontSize: 26 }}>{título}</Text>
    </Link>
  );
};

export default NavButton;
