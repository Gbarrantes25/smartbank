import React, {useState} from "react";
import GlobalStyle from "./GlobalStyle";


import Container from "./Components/Container";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import Switchertema from "./Components/Switchertema";

function App() {
  const [tema, setTema] = useState(true);
  const ToggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={ToggleTema}>
        <Switchertema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
