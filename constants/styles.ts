import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    gap: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  CardStyle: {
    flex: 1,
    gap: 10,
    padding: 20,
    height: "auto",
    minWidth: 350,
    width: "90%",
    borderRadius: 10,
    marginVertical: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  CardTitleText: {
    fontSize: 20,
  },

  CardDescriptionText: {
    fontSize: 16,
  },

  column: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    margin: 5,
  },

  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
  },

  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
  },
  linkText: {
    color: "blue",
    textAlign: "center",
    marginTop: 10,
  },
});
