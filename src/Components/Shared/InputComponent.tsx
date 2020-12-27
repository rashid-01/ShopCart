import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

export const InputComponent = (props: any) => {
    return (
        //@ts-ignore
        <TextInput style={props.inputStyle}
            label={props.labelName}
            
  left={
    <TextInput.Icon
      name={props.inputIcon}
      onPress={() => {}}
    />
  }
/>
    )
}