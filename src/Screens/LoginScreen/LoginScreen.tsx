import React, { Component, Fragment, useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, View } from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import ButtonComponent from '../../Components/Shared/ButtonComponent';
import { InputComponent } from '../../Components/Shared/InputComponent';
import Spacer from '../../Components/Shared/SpcerComponent';
import { TextComponent } from '../../Components/Shared/TextComponent';
import { UnderlineComponent } from '../../Components/Shared/UnderlineComponent';
import VisibilityToggle from '../../Components/Shared/VisibilityToggle';
import useLoginScreen from './useLoginScreen';

function LoginScreen(props: any) {
    const { navigateToHome, toggleVisibilty, visible } = useLoginScreen(props);
    return (
        <SafeAreaView style={{ flex: 1, flexGrow: 1, flexDirection: 'column' }}>
            <Spacer size={50} />
            <VisibilityToggle visible={visible}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextComponent style={{fontWeight:'700', fontSize:30}} title={'Sign in'}/>
            </View>
            <Spacer size={10}/>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                <TouchableOpacity onPress={(visible) => { toggleVisibilty(visible)}}>
                    <UnderlineComponent style={{ backgroundColor: '#00b500', height: 2, width: 40 }} />
                </TouchableOpacity>    
                <Spacer size={22} />
                <TouchableOpacity onPress={(notVisible)=>{toggleVisibilty(notVisible)}}>
                    <UnderlineComponent style={{ backgroundColor: 'grey', height: 2, width: 40 }} />
                </TouchableOpacity>    
            </View>
            <Spacer size={20}/>
            <View style={{ flex: 4, flexDirection: 'column', padding:25 }}>
                    <InputComponent labelName={'Email'} inputIcon={'email-outline'} inputStyle={{ backgroundColor: 'transparent' }} />
                    <Spacer size={20}/>
                <InputComponent labelName={'Password'} inputIcon={'lock-outline'} inputStyle={{backgroundColor:'transparent'}}/>
                </View>
                <Spacer size={50}/>
            <View style={{ flex: 4, paddingLeft: 20, paddingRight: 20, justifyContent:'flex-start'}}>
                <ButtonComponent color={'#00acec'} onclick={navigateToHome} style={{borderRadius:55, height:55, justifyContent:'center'}} fontSize={20} title={'LOGIN'}/>
            </View>
            </VisibilityToggle> 
            <VisibilityToggle visible={!visible}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextComponent style={{fontWeight:'700', fontSize:30}} title={'Sign up'}/>
            </View>
            <Spacer size={10}/>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>
                <TouchableOpacity onPress={(visible) => { toggleVisibilty(visible)}}>
                    <UnderlineComponent style={{ backgroundColor: 'grey', height: 2, width: 40 }} />
                </TouchableOpacity>    
                <Spacer size={22} />
                <TouchableOpacity onPress={(notVisible)=>{toggleVisibilty(notVisible)}}>
                    <UnderlineComponent style={{ backgroundColor: '#00b500', height: 2, width: 40 }} />
                </TouchableOpacity>    
            </View>
            <View style={{ flex: 8, flexDirection: 'column', padding:25 }}>
                <InputComponent labelName={'User name'} inputIcon={'email-outline'} inputStyle={{ backgroundColor: 'transparent' }} />
                <Spacer size={20}/>
                <InputComponent labelName={'Email'} inputIcon={'email-outline'} inputStyle={{ backgroundColor: 'transparent' }} />
                <Spacer size={20}/>
                <InputComponent labelName={'Mobile Number'} inputIcon={'lock-outline'} inputStyle={{ backgroundColor: 'transparent' }} />
                <Spacer size={20}/>
                <InputComponent labelName={'Password'} inputIcon={'lock-outline'} inputStyle={{backgroundColor:'transparent'}}/>
            </View>
            <Spacer size={100}/>
            <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20, justifyContent:'flex-start'}}>
                <ButtonComponent color={'#00acec'} onclick={(visible:any)=>toggleVisibilty(visible)} style={{borderRadius:55, height:55, justifyContent:'center'}} fontSize={20} title={'SIGN UP'}/>
            </View>
            </VisibilityToggle>
            </SafeAreaView>
    )
}

export default LoginScreen;