import React, {FunctionComponent} from "react";
import { ImageSourcePropType, StatusBar, StyleProp, StyleSheet, Text, TextStyle, ImageStyle, ViewStyle, GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
import { AmountProps } from "./types";



const AmountSectionBAckground = styled.View`
width: 100%;
padding-top: 5px;
align-items: center;
flex: 1;
`;

const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return(
        <AmountSectionBAckground>
            <SmallText style={{color:colors.secondary, marginBottom:15}}>
                Total Balance 
            </SmallText>
            <RegularText style={{color:colors.secondary, fontSize:28}}>
                ${props.balance}
            </RegularText>
        </AmountSectionBAckground>
    );
}
export default AmountSection;