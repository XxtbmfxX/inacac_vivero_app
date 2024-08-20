import { TextInput, View } from "react-native";
import { formStyles } from "@/constants/formStyles";
import { TextInputFieldProps } from "@/types/formTypes/interfaces";
import { Text } from "@rneui/themed";

const TextInputField: React.FC<TextInputFieldProps> = ({
  placeholder,
  value,
  error,
  onChangeText,
  keyboardType = "default",
  label,
}) => {
  return (
    <View>
      <Text h3>{label}</Text>
      <TextInput
        style={[formStyles.input, error ? formStyles.inputError : null]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
      />
      {error && <Text style={formStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default TextInputField;
