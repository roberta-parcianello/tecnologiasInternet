import './App.css'

function App(){
  
  function aloMundo(nome){
    alert("Alo "+ nome);
  }


  return(
    <div>
      <h1>Aula de Eventos</h1>
      <p>Minha primeira aplicação com eventos </p>
      <button onClick={()=>aloMundo("Fulano")}>Clique pra cumprimentar o Fulano</button>
      <button onClick={()=>aloMundo("Ciclano")}>Clique pra cumprimentar o Ciclano</button>
    </div>
  );
}

export default App;
