import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.header_text};
    width: ${RFValue(300)}px;
    padding: 19px 23px;
`;


export const  Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`; 

export const  Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`;  

export const  Icon = styled(MaterialIcons)`
    font-size: ${RFValue(35)}px; 
`;

export const  Consumption = styled.View`

`; 

export const  ConsumptionLabel = styled.Text`

`;  

export const  ConsumptionValue = styled.Text`

`; 

export const  Cost = styled.View`

`; 

export const  CostLabel = styled.Text`

`;  

export const  CostValue = styled.Text`

`;  

export const  Footer = styled.View`

`;  

export const  LastTransaction = styled.Text`

`;    