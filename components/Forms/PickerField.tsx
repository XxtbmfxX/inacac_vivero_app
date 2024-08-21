import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { formStyles } from '@/constants/formStyles';
import { PickerFieldProps } from '@/types/formTypes/interfaces';
import { Text } from '@rneui/themed';



const PickerField: React.FC<PickerFieldProps> = ({ selectedValue, onValueChange, options, error, label, valores }) => {


  return (
    <View>
      <Text h3 >{label}</Text>
      <Picker
        selectedValue={selectedValue}
        style={formStyles.picker}
        onValueChange={onValueChange}
      >
        {options.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
      {error && <Text style={formStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default PickerField;
