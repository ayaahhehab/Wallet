import React, {FunctionComponent} from "react";
import { ImageSourcePropType, StatusBar, StyleProp, StyleSheet, Text, TextStyle, ImageStyle, ViewStyle, GestureResponderEvent,View } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
import { TransactionProps } from "./types";
import TransactionAvi from "./TransactionAvi";


const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`;

const LeftView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    flex: 2;
`;

const RightView = styled.View`
flex:1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
    return (
        <TransactionRow>
        <LeftView>
            <TransactionAvi
                background={props.art.background}
                icon={props.art.icon}/>
            <View style={{ marginLeft: 10 }}>

                <RegularText style={{
                    color: colors.secondary,
                    textAlign: "left",
                    marginBottom: 5,
                }}>
                    {props.title}
                </RegularText>
                <SmallText style={{
                    textAlign: "left",
                    color: colors.graydark,
                }} >
                    {props.subtitle}
                </SmallText>
            </View>
        </LeftView>
        <RightView>
        <RegularText style={{
                    color: colors.secondary,
                    textAlign: "right",
                    marginBottom: 5,
                }}>
                    {props.amount}
                </RegularText>
                <SmallText style={{
                    textAlign: "right",
                    color: colors.graydark,
                }} >
                    {props.date}
                </SmallText>
            </RightView>
    </TransactionRow>
        
    );
};
export default TransactionItem;