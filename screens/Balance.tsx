import React, {FunctionComponent} from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import {colors} from '../components/colors';
import {Container} from '../components/shared';
import background from './../assets/bgs/background_v1.png';
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import RegularButton from "../components/Buttons/RegularButton";
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";


type props = StackScreenProps<RootStackParamList, "Balance">;

const BalanceContainer = styled(Container)`
background-color: ${colors.graylight};
width: 100%;
padding: 25px;
flex: 1;
`;

const Balance: FunctionComponent<props> = ({route}) =>{
    return(
        <BalanceContainer>
            <AmountSection balance={route?.params?.balance}/>
            <BalanceCardSection {...route?.params}/>
            <ButtonSection/>
        </BalanceContainer>

    );
};
export default Balance;