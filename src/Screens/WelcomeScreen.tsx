import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ButtonComponent from '../Components/Shared/ButtonComponent';
import Spacer from '../Components/Shared/SpcerComponent';
import { SwiperComponent } from '../Components/Shared/SwiperComponent';
import { TextComponent } from '../Components/Shared/TextComponent';
import { UnderlineComponent } from '../Components/Shared/UnderlineComponent';

class WelcomeScreen extends Component{
    //@ts-ignore
    render() {
        return (
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{ flex: 5}}>
                    <SwiperComponent/>
                </View>
                <View style={{ flex: 4 }}>
                    <Spacer size={50}/>
                    <View style={{ flex: 1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <TextComponent style={{ justifyContent: 'center', fontSize: 30, }} title={'Welcome to Shop cart'} /> 
                    </View>
                    <Spacer size={15}/>
                    <View style={{ flex: 1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <UnderlineComponent style={{backgroundColor:'#00b500', height:2, width:50}}/>
                    </View>
                    <View style={{ flex:6, justifyContent:'center', alignItems:'center',padding:15}}>
                        <TextComponent style={{ justifyContent: 'center', fontSize: 18, textAlign:'center', color:'grey' }} text={'Each online store has it\'s own store and bag, but if you want to go in multiple shopping at once, so you only have one bag.'} />
                    </View>
                </View>
                <View style={{ flex: 1}}>
                    <ButtonComponent color={'#00acec'} fontSize={20} style={{height:68, justifyContent:'center'}} title={'Getting Started'}/>
                </View>
            </View>
        )
    }
}

export default WelcomeScreen;