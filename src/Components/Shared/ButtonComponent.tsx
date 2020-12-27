import React from 'react';
import { Button, useTheme, withTheme } from 'react-native-paper';

const ButtonComponent = (props: any) => {
    const { fonts } = useTheme(); 
    return (
        //@ts-ignore
        <Button mode="contained" raised style={props.style} labelStyle={{fontSize:props.fontSize}} onPress={props.onclick} color={props.color}>{props.title}</Button>
    )
}

export default withTheme(ButtonComponent);