import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { SignIn } from "../../pages/Signin";
import { Signup } from "../../pages/Signup";

const Auth = createNativeStackNavigator();
export const AuthRoutes: React.FunctionComponent = () => {
    return (
        <Auth.Navigator>
            <Auth.Screen name="Signin" component={SignIn}></Auth.Screen>
            <Auth.Screen name="Signup" component={Signup}></Auth.Screen>
        </Auth.Navigator>
    );
}
