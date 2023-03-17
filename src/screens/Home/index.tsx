
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
  LogountIcon 
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
    </Container>
  );
}


