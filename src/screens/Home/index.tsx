
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
  Transactions,
  TransactionsList
  
} from './styles';
import React from 'react';


export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Home() {
  const transactionData: DataListProps[] = [
    {
      id: '1',
      type: 'alcohol',
      value: 'R$ 5,70',
      price: 'R$ 3,98',
      amount: '10',
      km: '130',
      date: '22/07/2022'
    },
    {
      id: '2',
      type: 'gasoline',
      value: 'R$ 5,70',
      price: 'R$ 3,58',
      amount: '10',
      km: '130',
      date: '22/07/2022'
    },
    {
      id: '3',
      type: 'gasoline',
      value: 'R$ 5,70',
      price: 'R$ 3,98',
      amount: '10',
      km: '130',
      date: '22/07/2022'
    },
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
          title='Álcool'
          consumption='8,25 km/l'
          cost='R$ 0,50 / km'
          lastTransaction='Data: 29 de março'
          type='alcohol'
        />
      <HighlightCard
          title='Gasolina'
          consumption='8,63 km/l'
          cost='R$ 0,28 / km'
          lastTransaction='Data: 28 de março'
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
        

        <TransactionsList
          data={transactionData}
          keyExtractor= {( item ) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}


