import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from '../screens/Splash'
import Login from '../screens/Login'

import { Home } from '../screens/Home'

const Stack = createNativeStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Splash"
                component={Splash}
            />

            <Stack.Screen
                name = "Login"
                component={Login}
            />

            <Stack.Screen
                name = "Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}