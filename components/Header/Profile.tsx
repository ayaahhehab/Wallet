import React, {FunctionComponent} from "react";
import { ImageSourcePropType, StatusBar, StyleProp, StyleSheet, Text, TextStyle, ImageStyle, ViewStyle, GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import { colors } from "../colors";



const StyledView = styled.TouchableOpacity`
flex-direction: column;
height: 45px;
width: 45px;
border-radius: 15px;
`;

const StyledImage = styled.Image`
resize: cover;
width: 100%;
height: 100%;
border-radius:15px;
`;

interface ProfileProps{
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
const Profile: FunctionComponent<ProfileProps> = (props) => {
    return(
       <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
        <StyledImage style={props.imgStyle} source={props.img}/>
       </StyledView> 
    );
}
export default Profile;