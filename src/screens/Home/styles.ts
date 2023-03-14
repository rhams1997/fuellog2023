import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';



export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  `;


  export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    
  `;

  export const UserWrapper = styled.View`
    flex-direction: row;
  `;

  export const CarIcon = styled.View``;

  export const HeaderTextWrapper = styled.View``;

  export const Greeting = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
  `;

  export const CarPlate = styled.View``;

  export const LogoutButton = styled.View``;

  export const LogountIcon  = styled.View``;
