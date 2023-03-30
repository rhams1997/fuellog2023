
import { FlatList } from 'react-native/Libraries/Lists/FlatList';
import { HighlightCard } from '../../Components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../Components/TransactionCard';
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


interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Home() {
  const transactionData: DataListProps[] = [
    {
      id: '1',
      type: 'alcohol' | 'gasoline';
      value: string;
      price: string;
      amount: string;
      km: string;
      date: string;
    }


  ];
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

        <FlatList
          data={transactionData}
          keyExtractor= {( item ) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

        
      
      </Transactions>

    </Container>
  );
}


