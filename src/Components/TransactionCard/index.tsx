
import {
     Container,
     Header,
     ValueContainer,
     ValueLabel,
     Value,
     Type,
     AmountContainer,
     Amount,
     Footer,
     KmContainer,
     Date 
} from "./styles";

export function TransactionCard(){
    return(
        <Container>
            <Header>
                <ValueContainer>
                    <ValueLabel> Valor: </ValueLabel>
                    <Value>R$ 151,24</Value>
                </ValueContainer>
                <Type>Álcool</Type> 
            </Header>

            <AmountContainer>
                <ValueLabel>Preço do litro:</ValueLabel>
                <Amount>R$ 4,49</Amount>
            </AmountContainer>

            <AmountContainer>
                <ValueLabel>Preço do litro:</ValueLabel>
                <Amount>R$ 38</Amount>
            </AmountContainer>

            <Footer>
                <KmContainer>
                    <ValueLabel> Km percorrida: </ValueLabel>
                    <Amount>R$ 340</Amount>
                </KmContainer>
                <Date>13/04/2022</Date> 
            </Footer>


        </Container>
    )
}