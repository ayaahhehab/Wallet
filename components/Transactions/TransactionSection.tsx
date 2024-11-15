import React, {FunctionComponent} from "react";
import { ImageSourcePropType, StatusBar, StyleProp, StyleSheet, Text, TextStyle, ImageStyle, ViewStyle, GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
import { TransactionSectionProps } from "./types";
import Icon from 'react-native-vector-icons/FontAwesome';
import TransactionItem from "./TransactionItem";



const TransactionSectionBackground = styled.View`
width: 100%;
padding-horizontal: 25px ;
flex: 1;
margin-top: -50px;
`;

const TransactionRow = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const TransactionList = styled.FlatList`
width: 100%;
`;

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return(
        <TransactionSectionBackground>
            <TransactionRow style={{marginBottom:25, justifyContent: 'space-between'}}>
                <RegularText style={{fontSize:19, color:colors.secondary}}>
                    Transactions 
                </RegularText>
                <SmallText style={{color:colors.secondary, paddingLeft: "60%"}}>
                     Recent
                </SmallText>
            </TransactionRow>
            <TransactionList
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:25}}
                keyExtractor={({id}:any)=>id.toString()}
                renderItem={({item}:any)=> <TransactionItem{...item}/>}
                />
        </TransactionSectionBackground>
    );
}
export default TransactionSection;