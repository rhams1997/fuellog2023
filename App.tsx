import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { useFonts,
   Poppins_400Regular,
   Poppins_500Medium,
   Poppins_600SemiBold,
   Poppins_700Bold 
  } from '@expo-google-fonts/poppins';
import { Loading } from './src/Components/Loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded){
  //if(true){ 
    return <Loading/>;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Home/>
    </ThemeProvider>
  );
}
