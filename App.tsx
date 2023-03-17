import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { useFonts,
   Inter_400Regular,
   Inter_500Medium
   //Poppins_600SemiBold,
   //Poppins_700Bold 
  } from '@expo-google-fonts/inter';
import { Loading } from './src/Components/Loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
    //Poppins_600SemiBold,
    //Poppins_700Bold
  });

  if (!fontsLoaded){
  //if(true){ 
    return <Loading/>;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home/>
    </ThemeProvider>
  );
}
