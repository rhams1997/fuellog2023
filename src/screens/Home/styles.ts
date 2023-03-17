import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  `;


  export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(20)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    //align-items: center;
    justify-content: center;
    
  `;

  export const UserWrapper = styled.View`
    flex-direction: row;
    padding: 0 24px;
    align-items: center;
    justify-content: space-between;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  `;

  export const CarInfo = styled.View`
    flex-direction: row;
    align-items: center;
  `;

  export const CarIcon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.header_text};//header_text
    font-size: ${RFValue(40)}px;

  `;

  export const HeaderTextWrapper = styled.View`
    margin-left: ${RFValue(26)}px;
  `;

  export const Greeting = styled.Text`
    color: ${({ theme }) => theme.colors.header_text};//header_text
    font-family: ${({ theme }) => theme.fonts.regular};//font-family deu error, logo tive que usar fontfamily
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(24)}px;
;
  `;

  export const CarPlate = styled.Text`
    color: ${({ theme }) => theme.colors.header_text};//header_text
    font-family: ${({ theme }) => theme.fonts.bold};//font-family deu error, logo tive que usar fontfamily
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(24)}px;
  `;

  export const LogoutButton = styled.View``;

  export const LogountIcon  = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.header_text};
    font-size: ${RFValue(20)}px;

  `;
