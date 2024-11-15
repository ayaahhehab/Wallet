import React, {FunctionComponent, useRef} from "react";
import { ImageSourcePropType, StatusBar, StyleProp, StyleSheet, Text, TextStyle, ImageStyle, ViewStyle, GestureResponderEvent,View,Alert } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
import Profile from "../Header/Profile";
import { ScreenWidth } from "../shared";
import { SendMoneyprops, SendMoneySectionProp } from "./types";


const SendMoneyItemContainer = styled.TouchableHighlight`
height: 130px;
width: ${ScreenWidth * 0.27}px;
padding: 10px;
border-radius: 15px;
justify-content: space-around;
margin: 0px 10px 10px 0px;
`;


const SendMoneyItem: FunctionComponent<SendMoneyprops> = (props) => {
    return(
        <SendMoneyItemContainer
        underlayColor={colors.secondary}
        style={{backgroundColor:props.background}}
        onPress={() => {
            Alert.alert("Send Money!")
        }}>
            <>
            <Profile img={props.img} imgContainerStyle={{marginBottom:10}}/>
            <SmallText style={{textAlign:"left", color:colors.white, fontSize:12}}>
                {props.name}
            </SmallText>
            <RegularText style={{textAlign:"left", color:colors.white, fontSize:13}}>
                {props.amount}
            </RegularText>
            </>

        </SendMoneyItemContainer>
    );
}
export default SendMoneyItem;