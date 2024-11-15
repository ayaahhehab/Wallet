import React, {FunctionComponent} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import {colors} from '../components/colors';
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avatar from "./../assets/avi/avatar.png";
import { CardProps } from "../components/Cards/types";
import Balance from "../screens/Balance";


export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Balance: CardProps;
}
const Stack = createStackNavigator<RootStackParamList>();
const RootStack: FunctionComponent = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.graylight,
                borderBottomWidth:0,
                shadowColor:"transparent",
                shadowOpacity:0,
                elevation:0,
                height:120,
            },
            headerTintColor:colors.secondary,
            headerRightContainerStyle:{paddingRight:25,},
            headerLeftContainerStyle:{paddingLeft:20},
            headerRight: () => (
                <Profile
                img={Avatar}
                imgContainerStyle={{backgroundColor:colors.tertiary}}/>
            ),
        }}
        >
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown:false}} />
            <Stack.Screen 
            name="Home"
            component={Home}
            options={{
                headerTitle: (props) =>(
                    <Greeting mainText={"Hey Aya!"} subText={"Welcome Back"}
                    {...props}/>
                ),
                headerLeft:()=><></>,
            }}/>
            <Stack.Screen
            name="Balance"
            component={Balance}
            options={({route}) => ({
            headerTitle:route?.params?.alias,
            headerTitleAlign:"center",
            headerLeftContainerStyle:{paddingLeft:0,}
        })}
        />
        </Stack.Navigator>

    </NavigationContainer>
    );
}
export default RootStack;