import { Tabs } from "expo-router";
import React from "react";

export default function ProtectedLayout() {

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="home" />
        </Tabs>
    );
}