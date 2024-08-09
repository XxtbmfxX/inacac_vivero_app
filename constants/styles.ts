import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  CardStyle: {
    flex: 1,
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  cardText: {
    fontSize: 16,
    marginBottom: 10,
  },


    column: {
    flex: 1,
    backgroundColor: "#f0f0f0", // color de fondo opcional para visualizar las columnas
    margin: 5, // margen opcional para separar las columnas
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
