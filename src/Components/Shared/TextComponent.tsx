import React from 'react';
import { Text } from 'react-native';

export const TextComponent = (props:any) => {
    return (
        props.title ? <Text style={props.style}>{props.title}</Text> : <Text style={props.style}>{ props.text}</Text>
    )
}