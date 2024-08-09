import { Stack } from "expo-router";

export default function PublicLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="sing-up" />
			<Stack.Screen name="sing-in" />
			<Stack.Screen name="terminos-y-condiciones" />
		</Stack>
	);
}