import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../colors";
import { TransactionAviProps } from "./types";


const StyledView = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return (
        <StyledView style={{backgroundColor:props.background}}>
            <Icon name={props.icon} size={25} color="black"/>
        </StyledView>
    );
};
export default TransactionAvi;