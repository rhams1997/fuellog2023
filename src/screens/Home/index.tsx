
import { HighlightCard } from '../../Components/HighlightCard';
import { 
  Container,
  Header,
  UserWrapper,
  CarIcon,
  CarInfo,
  HeaderTextWrapper,
  HeaderText,
  Greeting,
  CarPlate,
  LogoutButton,
  LogountIcon,
  HighlightCards,
  Title,
  Transactions
  
} from './styles';

export function Home() {
  return (
    <Container>
        
      <Header>
        <UserWrapper>
          <CarInfo>
            <CarIcon name='ios-car-sport'>

            </CarIcon>

            <HeaderText>

              <Greeting>
                Bem Vindo!
              </Greeting>

            </HeaderText>

            <HeaderTextWrapper>

              <CarPlate>
                BRA-2E19
              </CarPlate>
              
            </HeaderTextWrapper>

          </CarInfo>
          <LogoutButton>

            <LogountIcon name='logout'>

            </LogountIcon>

          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title='Ácool'
          consumption='7,00 km/l'
          cost='R$ 0,34 / km'
          lastTransaction='Última entrada dia 13 de abril'
          type='alcohol'
        />
      <HighlightCard
          title='Gasolina'
          consumption='8,63 km/l'
          cost='R$ 0,28 / km'
          lastTransaction='Última entrada dia 3 de abril'
          type='gasoline'
        />
      <HighlightCard
          title='Geral'
          consumption='7,82 km/l'
          cost='R$ 0,31 / km'
          lastTransaction='01 a 16 de abril'
          type='total'
        />
      </HighlightCards>

      <Transactions>
        <Title> Abastecimentos</Title>
      </Transactions>

    </Container>
  );
}


