import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.header_text};
    width: ${RFValue(300)}px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(32)}px;
    margin-right: 16px;
`;

export const  Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`; 

export const  Title = styled.Text`
    color: ${({ theme }) => theme.colors.card_title};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`;  

export const  Icon = styled(MaterialIcons)`
    font-size: ${RFValue(35)}px; 
`;

export const  Consumption = styled.View`
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;
`; 

export const  ConsumptionLabel = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-right: 15px;
`;  

export const  ConsumptionValue = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`; 

export const  Cost = styled.View`
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;
`; 

export const  CostLabel = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-right: 30px;
`;  

export const  CostValue = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`;  

export const  Footer = styled.View`
    margin-bottom: ${RFValue(16)}px;    
`;  

export const  LastTransaction = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(10)}px;
`;    