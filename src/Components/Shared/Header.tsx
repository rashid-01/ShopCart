import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { TextComponent } from './TextComponent';

export const Header = (props: any) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
            </View>
            <View style={{ flex: 6, flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start' }}>
                <TextComponent style={{fontSize:30, color: '#00acec' }} text={'Shop'} />
                <TextComponent style={{fontSize:30, color:'#00b500'}} text={'cart'}/>
            </View>
            <View style={{ flex: 3, justifyContent:'center', alignItems:'flex-end' }}>
                <TouchableOpacity onPress={props.action}>
                    <TextComponent style={{fontSize:20}} text={'Skip'}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}