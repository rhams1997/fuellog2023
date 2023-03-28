import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from '../screens/Splash'
import Login from '../screens/Login'
import Home from '../screens/Home'
import { Loading } from './src/Components/Loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

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