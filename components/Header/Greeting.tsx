import React, {FunctionComponent} from "react";
import { StatusBar, StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";

const StyledView = styled.View`
flex-direction: column;
flex:1;
justify-content: center;
`;


 interface GreetingProps{
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;

 }

 const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return(
        <StyledView>
            <RegularText style={[
                {color: colors.secondary, fontSize:22}
                // props.mainTextStyles
                ]}>
                {props.mainText}
            </RegularText>
            <SmallText style={[
                {color:colors.graydark},
                props.subTextStyles
            ]} >
                {props.subText}
            </SmallText>
        </StyledView>
    );
 }
 export default Greeting;