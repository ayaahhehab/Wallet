import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import {colors} from'../colors';
import { TextProps

 } from "react-native";
const StyledText = styled.Text`
font-size:37px;
color: ${colors.white};
text-align :left;
font-family: Lato-Bold;
`

const BigText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.style}>{props.children}</StyledText>;
};
export default BigText;