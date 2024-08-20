import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({

  formContainer: {
    gap: 30,
    width: '100%',
    maxWidth: 400,
  },

  input: {
    width: "100%",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },

  inputError: {
    borderColor: "red",
  },

  picker: {
    width: "100%",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },

  errorText: {
    color: "red",
  },
});
