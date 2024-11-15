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

const WelcomeContainer = styled(Container)`
background-color: ${colors.secondary};
justify-content: space-between;
width: 100%;
height: 100%;
`;
const TopSection = styled.View`
width: 100%;
max-height:55%;
flex: 1;
`;
const TopImage = styled.Image`
width:100%;
height:100%;
resize: stretch;
`;
const BottomSection = styled.View`
width: 100%;
padding: 25px;
flex: 1;
justify-content: flex-end;
`;
type props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<props> = ({navigation}) => {
    return(
        <>
        <StatusBar barStyle="light-content" />
        <WelcomeContainer>
            <TopSection>
                <TopImage source={background}/>

            </TopSection>
            <BottomSection>
                <BigText style={{width:"70%", marginBottom:50}}>
                    Best way to track your money
                </BigText>
                <SmallText style={{width:"70%", marginBottom:60}}>
                    Best payment method, connect your money to your friends, family
                </SmallText>
                <RegularButton onPress={() => {navigation.navigate("Home") } }>
                    Get Started
                </RegularButton>
            </BottomSection>
        </WelcomeContainer>
        </>
    )
};
export default Welcome;