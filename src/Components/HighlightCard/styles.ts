import styled, {css} from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


interface TypeProps {
    type: 'alcohol' | 'gasoline' | 'total';
}

export const Container = styled.View<TypeProps>`

    background-color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.card_title :  theme.colors.card_color};

    width: ${RFValue(300)}px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(2)}px;
    margin-right: 16px;
`;

export const  Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1px;
`; 

export const  Title = styled.Text<TypeProps>`
    color: ${({ theme, type }) => 
    type === 'gasoline' ? theme.colors.gasoline_color :  theme.colors.alcohol_color};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`;  

export const  Icon = styled(MaterialIcons)<TypeProps>`
    font-size: ${RFValue(40)}px;
    ${(props) => props.type === 'alcohol' && css`
        color: ${({ theme }) => theme.colors.alcohol_color};
    `}
    ${(props) => props.type === 'gasoline' && css`
        color: ${({ theme }) => theme.colors.gasoline_color};
    `}
    ${(props) => props.type === 'total' && css`
        color: ${({ theme }) => theme.colors.text_light};
    `}

`;

export const  Consumption = styled.View`
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;
`; 

export const  ConsumptionLabel = styled.Text<TypeProps>`
    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.card_title :  theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-right: 15px;
`;  

export const  ConsumptionValue = styled.Text<TypeProps>`
    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.card_title :  theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`; 

export const  Cost = styled.View`
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;
`; 

export const  CostLabel = styled.Text<TypeProps>`
    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.card_title :  theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-right: 30px;
`;  

export const  CostValue = styled.Text<TypeProps>`
    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.card_title :  theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`;  

export const  Footer = styled.View`
    margin-bottom: ${RFValue(16)}px;    
`;  

export const  LastTransaction = styled.Text<TypeProps>`
    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.card_title :  theme.colors.text_light};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(10)}px;
`; 
