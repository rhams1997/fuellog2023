import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

interface TypeProps {
    type: 'alcohol' | 'gasoline' ;
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.card_color};

    padding: 10px 22px;
    margin-top: ${RFValue(10)}px;
    border-radius: 5px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ValueContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ValueLabel = styled.Text`
    color: ${({ theme }) => theme.colors.card_title};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-right: 15px;
`;
export const Value = styled.Text<TypeProps>`
    color: ${({ theme, type }) => type === 'alcohol' ? theme.colors.alcohol_color : theme.colors.gasoline_color};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`;

export const  Type = styled.Text<TypeProps>`
    color: ${({ theme, type }) => 
    type === 'gasoline' ? theme.colors.gasoline_color :  theme.colors.alcohol_color};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`;  

export const AmountContainer = styled.View`
    flex-direction: row;
    align-items: center; 
    margin-top: 1px;

`;

export const Amount = styled.Text`
    color: ${({ theme }) => theme.colors.card_title};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1px 0 2px 0;
`;

export const KmContainer = styled.View`
    flex-direction: row;
    align-items: center;    

`;

export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.header_text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;    
`;

export const CarIcon = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(40)}px;
    flex-direction: row;
    align-items: center; 
    margin-top: 1px;
`;