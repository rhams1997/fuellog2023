
import { 
  Container,
  Header,
  UserWrapper,
  CarIcon,
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
            <CarIcon>
              

            </CarIcon>

            <HeaderTextWrapper>

              <Greeting>

              </Greeting>

              <CarPlate>

              </CarPlate>
            </HeaderTextWrapper>

          </CarInfo>
          <LogoutButton>

            <LogountIcon>

            </LogountIcon>

          </LogoutButton>
        </UserWrapper>
      </Header>
    </Container>
  );
}


