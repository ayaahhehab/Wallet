import React, {FunctionComponent} from "react";
import { StatusBar, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
import { BalanceCardProps } from "./types";
import { ScreenWidth } from "../shared";
import Card from "./../../assets/bgs/background_transparent.png"


const CardBackground = styled.ImageBackground`
height:75%;
width: 100%;
resize: cover;
background-color: ${colors.accent};
border-radius: 25px;
overflow: hidden;
`;


const CardTouchable = styled.TouchableHighlight`
height: 100%;
border-radius: 25px;
`;


const TouchableView = styled.View`
justify-content: space-between;
align-items: center;
padding: 30px;
flex: 1;
`;

const CardRow = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`;


const Logo = styled.Image`
width: 100%;
height: 50%;
resize: contain;
flex: 1;
`;


const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {

    return(
        <CardBackground source={Card}>
                <TouchableView>
                    <CardRow>
                        <RegularText>
                            ***** {props?.accountNo?.slice(6,10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{flex:3}}>
                            <SmallText style={{marginBottom:5, color: colors.graylight}}>
                            Total Balance
                            </SmallText>
                            <RegularText style={{fontSize: 19}}>
                                ${props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo}/>
                    </CardRow>
                </TouchableView>
        </CardBackground>
    );
}
export default BalanceCard;

