
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

interface Props{
    title: string;
    consumption: string;
    cost:string;
    lastTransaction: string;
    type: 'alcohol' | 'gasoline' | 'total';
}

export function HighlightCard({
    title,
    consumption,
    cost,
    lastTransaction,
    type
}: Props) {
    const icons = {
        alcohol: "local-gas-station",
        gasoline: "local-gas-station",
        total: "local-gas-station"
    }

    return(
        <Container>
            <Header>
                <Title>{title}</Title>
                <Icon name={icons[type]} />
            </Header>

            <Consumption>
                <ConsumptionLabel>Consumo Médio:</ConsumptionLabel>
                <ConsumptionValue>{consumption}</ConsumptionValue>
            </Consumption>

            <Cost>
                <CostLabel>Custo por km:</CostLabel>
                <CostValue>{cost}</CostValue>
            </Cost>

            <Footer>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}