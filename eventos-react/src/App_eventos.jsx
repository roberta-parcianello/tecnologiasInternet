import './App.css';
import { useState } from 'react';

function App(){
    //estado do contador
    const [contador, setContador] = useState(0);
    //estado pra trabalhar com formulário
    const [nome, setNome] = useState("");
    //estado da tarefa
    const [tarefa, setTarefa] = useState("")
    //estado da lista de tarefas
    const [tarefas, setTarefas] = useState([]);

    function adicionaTarefa(event){
        event.preventDefault();
        if (tarefa.trim()===""){
            return;
        }
        setTarefas([...tarefas, tarefa]); //spread operator
        setTarefa("");
    }

    function alterarNome(event){
        setNome(event.target.value); //event é o evento que foi gerou a chamada da função
        //target é o elemento html que sofreu/originou o evento, value é valor atual do elemento

    }

    function incrementar(){
        setContador(contador+1);
    }
    function decrementar(){
        setContador(contador-1);
    }
    function zerar(){
        setContador(0);
    }

    function mostraMensagem(){
        alert("Você clicou no botão");
    }
    function boaNoite(nome){
        alert("Boa Noite " + nome);
    }
    return(
        <div>
            <h1>Aula de Eventos React</h1>
            <p>Minha primeira aplicação com eventos!</p>
            <button onClick={mostraMensagem}>Clique aqui</button>
            <button onClick={()=>boaNoite("Maria")}>Cumprimentar a Maria</button>
            <button onClick={()=>boaNoite("Jose")}>Cumprimentar José</button>
            <h2>Contador de Cliques</h2>
            <p>{contador}</p>
            <button onClick={incrementar}>Somar cliques</button>
            <button onClick={decrementar}>Subtrair cliques</button>
            <br/>
            <button onClick={zerar}>Zerar o contador</button>
            <hr/>
            <h2>Evento onChange</h2>
            <label>Nome</label>
            <input type='text' placeholder='Digite seu nome' value={nome} onChange={alterarNome}/>
            <br/>
            <p>Alô, {nome}!</p>
            <hr/>
            <h2>Lista de Tarefas</h2>
            <form onSubmit={adicionaTarefa}>
                <label>Tarefa</label>
                <input type='text' value={tarefa} 
                onChange={(event)=>setTarefa(event.target.value)}
                placeholder='Digite uma tarefa'/>
                <button type='submit'>Adicionar</button>
            </form>

           <p>tarefas cadastradas</p>
           <ul>
            {tarefas.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
           </ul>
        </div>
    )
}

export default App;