
import { 
  Container,
  Header,
  UserWrapper,
  CarIcon,
  CarInfo,
  HeaderTextWrapper,
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
            <CarIcon name='directions-car'>

              

            </CarIcon>

            <HeaderTextWrapper>

              <Greeting>
                Placa

              </Greeting>

              <CarPlate>
                AAA-9999

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


