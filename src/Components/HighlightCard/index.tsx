
import {
    Container,
    Header,
    Title,
    Icon,
    Consumption,
    ConsumptionLabel,
    ConsumptionValue,
    Cost,
    CostLabel,
    CostValue,
    Footer, 
    LastTransaction
} from './styles';

export function HighlightCard() {
    return(
        <Container>
            <Header>
                <Title>Álcool</Title>
                <Icon name="local-gas-station" />
            </Header>
            <Consumption>
                <ConsumptionLabel>Consumo Médio:</ConsumptionLabel>
                <ConsumptionValue>7,00 km/l</ConsumptionValue>
            </Consumption>

            <Cost>
                <CostLabel>Custo por km:</CostLabel>
                <CostValue>0,34 / km</CostValue>
            </Cost>

            <footer>
                <LastTransaction>Ultima entrada dia 13 de abril</LastTransaction>
            </footer>
        </Container>
    )
}