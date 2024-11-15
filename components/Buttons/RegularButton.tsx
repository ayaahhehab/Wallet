import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import {colors} from'../colors';
import RegularText from "../Texts/RegularText";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";


const ButtonView = styled.TouchableOpacity`
align-items:center;
background-color:${colors.primary};
width:100%;
padding:20px;
border-radius:40px;

`;

interface ButtonProps{
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}
const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return(
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            <RegularText style={props.textStyles} >{props.children}</RegularText>
        </ButtonView>
    );
}
export default RegularButton;