import React from "react";
import { View, Text } from "react-native";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { formStyles } from "@/constants/formStyles";
import { DatePickerFieldProps } from "@/types/formTypes/interfaces";
import { Button } from "@rneui/themed";

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  value,
  onChange,
  error,
  label,
}) => {
  const showAndroidPicker = () => {
    DateTimePickerAndroid.open({
      value: value || new Date(),
      onChange,
      mode: "date",
      is24Hour: true,
      display: "calendar",
      timeZoneName: "America/Santiago",
    });
  };

  return (
    <View>
      <Button
        onPress={() => showAndroidPicker()}
        title={"Elegir " + label}
        size="lg"
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 3,
        }}
      />
      <Text> {value.toLocaleDateString()} </Text>
      {error && <Text style={formStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default DatePickerField;
