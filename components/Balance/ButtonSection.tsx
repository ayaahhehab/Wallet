import React, {FunctionComponent} from "react";
import { StatusBar, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";
import Icon from 'react-native-vector-icons/FontAwesome';
import RegularButton from "../Buttons/RegularButton";
import { useNavigation } from "@react-navigation/native";
import { props} from "../../screens/Home";


const ButtonSectionBackground = styled.View`
width: 100%;
align-items: center;
flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
    const navigation = useNavigation<props ["navigation"]>();

    return(
        <ButtonSectionBackground>
            <RegularButton btnStyles={{width:"50%"}} onPress={() => {navigation.navigate("Home")}}>
                Cancel 
            </RegularButton>
        </ButtonSectionBackground>
    );
}
export default ButtonSection;