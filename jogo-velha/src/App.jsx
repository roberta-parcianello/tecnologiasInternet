import { useState } from "react";

function Quadrado({ valor, aoClicar }) {
  return (
    <button onClick={aoClicar}>
      {valor}
    </button>
  );
}

function App() {
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));
  function jogar(posicao) {
    const novosQuadrados = quadrados.slice();
    novosQuadrados[posicao] = "X";
    setQuadrados(novosQuadrados);
  }
  return (
    <div>
      <h1> Jogo da Velha</h1>
      <div>
        <Quadrado valor={quadrados[0]} aoClicar={()=>jogar(0)}/>
        <Quadrado valor={quadrados[1]} aoClicar={()=>jogar(1)}/>
        <Quadrado valor={quadrados[2]} aoClicar={()=>jogar(2)}/>
      </div>
      <div>
        <Quadrado valor={quadrados[3]} aoClicar={()=>jogar(3)} />
        <Quadrado valor={quadrados[4]} aoClicar={()=>jogar(4)}/>
        <Quadrado valor={quadrados[5]} aoClicar={()=>jogar(5)}/>
      </div>
      <div>
        <Quadrado valor={quadrados[6]} aoClicar={()=>jogar(6)}/>
        <Quadrado valor={quadrados[7]} aoClicar={()=>jogar(7)}/>
        <Quadrado valor={quadrados[8]} aoClicar={()=>jogar(8)}/>
      </div>
    </div>
  );
}

export default App
