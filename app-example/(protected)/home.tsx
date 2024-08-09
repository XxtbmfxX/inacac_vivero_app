import { Button, Text } from "@rneui/themed";
import { useRouter } from "expo-router";
import { View } from "react-native";
export default function TabOneScreen() {
	const router = useRouter();

	return (
		<View >
			
			<Button
				onPress={() => {
					router.push("/modal");
				}}
			>
				<Text>Open Modal</Text>
			</Button>

                <Text>Mostrar los botones para poder ir a las secciones owo</Text>

		</View>
	);
}