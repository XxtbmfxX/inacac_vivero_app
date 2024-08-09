import { SupabaseAuthProvider } from "@/context/supabaseAuthContext";
import { SupabaseDataProvider } from "@/context/supabseDataContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SupabaseAuthProvider>
      <SupabaseDataProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "flip",
          }}
        >
        </Stack>
      </SupabaseDataProvider>
    </SupabaseAuthProvider>
  );
}
