
import { ColorChild, Container, Grid, Grid1, Grid2, Hamburger } from "./styles";
import logoImg from "../../assets/logo.png";

export function Navbar() {
  return (
    <Container>
      <Grid>

        <img src={logoImg} alt="OrganizeFY" />

        <Grid1>
          <section>
            <nav>
              <ul>
                <ColorChild >
                  <li>
                 
                    <a href="home"> COMECE GRÁTIS </a>  
                                 
                  </li>
                </ColorChild>
                <ColorChild >
                  <li>
                    <a href="sobre"> VANTAGENS </a>
                  </li>
                </ColorChild>

                <ColorChild >
                  <li>
                    <a href="contato"> FALE COM UM ESPECIALISTA </a>
                  </li>
                </ColorChild>

              </ul>
            </nav>
          </section>
        </Grid1>


      </Grid>
    </Container>
  );
}
