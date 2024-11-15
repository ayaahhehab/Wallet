import React, {FunctionComponent} from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import {colors} from '../colors';
import { BalanceCardProps } from "./types";
import BalanceCard from "./BalanceCard";


const BalanceCardSectionBackground = styled.View`
width: 100%;
align-items: center;
flex: 2;
`;

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
    return(
        <BalanceCardSectionBackground>
            <BalanceCard {...props}/>
        </BalanceCardSectionBackground>
    )
}
export default BalanceCardSection;
