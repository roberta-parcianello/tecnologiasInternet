import { useState } from "react";

function Quadrado({ valor, aoClicar }) {
  return (
    <button onClick={aoClicar}>
      {valor}
    </button>
  );
}

function verficarVencedor(quadrados){
  const combinacoes = [
    [0,4,8],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];

  for(let i = 0;i<combinacoes.length;i++){
    const [a,b,c] = combinacoes[i];
    if(quadrados[a] && quadrados[a]===quadrados[b] && quadrados[a] === quadrados[c]){
      return quadrados[a];
    }
  }
  return null;
}

function App() {
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));
  //01/10
  const [vezDoX, setVezDoX] = useState(true);
  const vencedor = verficarVencedor(quadrados);


  function jogar(posicao) {
    if(quadrados[posicao] !== null){
      return;
    }
    const novosQuadrados = quadrados.slice();
    //1/10
    if(vezDoX){
      novosQuadrados[posicao] = "X";
    }else{
      novosQuadrados[posicao] = "O";
    }
    
    setQuadrados(novosQuadrados);
    //1/10
    setVezDoX(!vezDoX);
  }
  return (
    <div>
      <h1> Jogo da Velha</h1>
      <p>
        {vencedor ? (<p> vencedor: {vencedor}</p>): <p>Próximo jogador: {vezDoX ? "X" : "O"}</p>}
      </p>
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
