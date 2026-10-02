# Jogo da Velha com React ⚛️

Neste projeto vamos desenvolver um **Jogo da Velha utilizando React**.

Além de construir o jogo, o objetivo é conhecer alguns conceitos fundamentais do React e revisar recursos importantes do JavaScript moderno.

Durante o projeto trabalharemos com:

- criação de projetos com Vite;
- arquivos JSX;
- componentes React;
- propriedades (`props`);
- eventos;
- estado;
- Hooks;
- `useState`;
- arrays;
- `fill()`;
- `slice()`;
- `includes()`;
- funções;
- Arrow Functions;
- operador ternário;
- desestruturação de arrays;
- renderização dinâmica da interface.

---

# 1. Criando um projeto React com Vite

Para criar nosso projeto utilizamos o **Vite**.

O Vite é uma ferramenta utilizada para criar e executar projetos web modernos durante o desenvolvimento.

No terminal:

```bash
npm create vite@latest
```

O Vite solicitará algumas informações.

Por exemplo:

```text
Project name: jogo-da-velha
Select a framework: React
Select a variant: JavaScript
```

Depois entramos na pasta criada:

```bash
cd jogo-da-velha
```

Instalamos as dependências:

```bash
npm install
```

E executamos o projeto:

```bash
npm run dev
```

O terminal mostrará um endereço semelhante a:

```text
http://localhost:5173/
```

Abra esse endereço no navegador.

> Sempre que quisermos trabalhar novamente no projeto, não precisamos criá-lo outra vez.
> Basta entrar na pasta do projeto e executar `npm run dev`.

---

# 2. Estrutura básica do projeto

Entre os arquivos criados pelo Vite encontraremos:

```text
src/
├── App.jsx
├── main.jsx
└── ...
```

O arquivo que utilizamos principalmente durante esta aula é:

```text
App.jsx
```

---

# 3. O que é JSX?

Observe este código:

```jsx
function App() {
  return (
    <div>
      <h1>Jogo da Velha</h1>
    </div>
  );
}
```

À primeira vista parece HTML.

Porém, estamos escrevendo isso dentro de um arquivo JavaScript.

Essa sintaxe é chamada **JSX**.

JSX significa:

**JavaScript XML**

Ele permite escrever uma estrutura semelhante ao HTML dentro do JavaScript.

Por exemplo:

```jsx
const nome = "Maria";

return (
  <h1>Olá, {nome}</h1>
);
```

As chaves `{ }` permitem utilizar JavaScript dentro do JSX.

Neste caso:

```jsx
{nome}
```

será substituído pelo valor armazenado na variável.

A tela apresentará:

```text
Olá, Maria
```

---

# 4. O que é um componente?

Uma aplicação React é construída utilizando **componentes**.

Um componente representa uma parte da interface.

Podemos criar, por exemplo:

- um botão;
- um menu;
- um formulário;
- um produto;
- uma tela;
- um quadrado do nosso jogo.

No nosso projeto criamos o componente:

```jsx
function Quadrado() {
  return (
    <button>
    </button>
  );
}
```

Agora podemos utilizar esse componente:

```jsx
<Quadrado />
```

E podemos utilizá-lo várias vezes:

```jsx
<Quadrado />
<Quadrado />
<Quadrado />
```

Essa é uma das principais ideias do React:

> Construir interfaces utilizando componentes reutilizáveis.

---

# 5. Props — passando informações para um componente

Queremos que cada `Quadrado` consiga receber um valor.

Para isso utilizamos **props**.

Por exemplo:

```jsx
function Quadrado({ valor }) {
  return (
    <button>
      {valor}
    </button>
  );
}
```

Agora podemos passar um valor:

```jsx
<Quadrado valor="X" />
```

O componente recebe:

```jsx
valor = "X"
```

e apresenta esse valor dentro do botão.

Podemos pensar nas props como informações que são enviadas para um componente.

---

# 6. Passando uma função através das props

Também podemos passar funções para componentes.

No nosso projeto fizemos:

```jsx
function Quadrado({ valor, aoClicar }) {
  return (
    <button onClick={aoClicar}>
      {valor}
    </button>
  );
}
```

Temos duas propriedades:

```text
valor
aoClicar
```

`valor` contém o que será apresentado no quadrado.

`aoClicar` contém a função que será executada quando o botão for clicado.

Utilizamos:

```jsx
<Quadrado
  valor={quadrados[0]}
  aoClicar={() => jogar(0)}
/>
```

Portanto:

```jsx
valor={quadrados[0]}
```

envia o conteúdo da posição `0` do array.

Enquanto:

```jsx
aoClicar={() => jogar(0)}
```

informa o que deverá acontecer quando aquele quadrado for clicado.

---

# 7. Eventos no React

No HTML temos eventos como clique, alteração de campos, envio de formulários etc.

No React podemos utilizar:

```jsx
onClick
```

Por exemplo:

```jsx
<button onClick={aoClicar}>
  {valor}
</button>
```

Quando o usuário clicar no botão, a função armazenada em `aoClicar` será executada.

Observe que no JSX escrevemos:

```text
onClick
```

e não:

```text
onclick
```

---

# 8. O que são Hooks?

**Hooks** são funções disponibilizadas pelo React que permitem utilizar recursos do React dentro dos nossos componentes.

Um dos Hooks mais importantes é:

```jsx
useState
```

Para utilizá-lo precisamos importá-lo:

```jsx
import { useState } from "react";
```

---

# 9. O Hook useState

O `useState` permite que um componente **guarde informações que podem mudar durante a execução da aplicação**.

Chamamos essas informações de **estado**.

No nosso jogo precisamos guardar o conteúdo dos nove quadrados.

Criamos:

```jsx
const [quadrados, setQuadrados] =
  useState(Array(9).fill(null));
```

Vamos entender essa instrução por partes.

---

# 10. Criando um array com Array()

Primeiro temos:

```javascript
Array(9)
```

Isso cria um array com 9 posições.

Nosso tabuleiro possui exatamente 9 casas:

```text
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
```

---

# 11. O método fill()

Depois utilizamos:

```javascript
.fill(null)
```

`fill()` significa **preencher**.

Portanto:

```javascript
Array(9).fill(null)
```

cria:

```javascript
[
  null, null, null,
  null, null, null,
  null, null, null
]
```

O `null` indica que aquela posição ainda está vazia.

Depois de algumas jogadas poderíamos ter:

```javascript
[
  "X", "O", null,
  null, "X", null,
  null, null, "O"
]
```

---

# 12. Entendendo o useState

Voltando à instrução:

```jsx
const [quadrados, setQuadrados] =
  useState(Array(9).fill(null));
```

Temos:

```text
quadrados
```

que contém o estado atual do tabuleiro.

E:

```text
setQuadrados
```

é a função utilizada para alterar esse estado.

Por exemplo:

```jsx
setQuadrados(novosQuadrados);
```

Quando alteramos um estado utilizando sua função `set`, o React atualiza a interface.

Essa é uma ideia fundamental do React:

> O estado muda e o React atualiza a interface.

---

# 13. Outro estado: de quem é a vez?

Também precisamos saber se é a vez do X ou do O.

Criamos outro estado:

```jsx
const [vezDoX, setVezDoX] = useState(true);
```

Inicialmente:

```text
vezDoX = true
```

Portanto X começa.

Depois de uma jogada fazemos:

```jsx
setVezDoX(!vezDoX);
```

O operador `!` representa uma negação.

Se:

```text
vezDoX = true
```

então:

```text
!vezDoX = false
```

Na próxima jogada:

```text
!false = true
```

Dessa maneira alternamos entre os jogadores.

---

# 14. Mostrando o próximo jogador

Podemos mostrar na tela:

```jsx
<p>
  Próximo jogador: {vezDoX ? "X" : "O"}
</p>
```

Aqui utilizamos o **operador ternário**.

A estrutura é:

```javascript
condicao ? valorSeVerdadeiro : valorSeFalso
```

Portanto:

```javascript
vezDoX ? "X" : "O"
```

significa:

```text
Se vezDoX for true
    "X"
senão
    "O"
```

---

# 15. Registrando uma jogada

Nossa função recebe a posição clicada:

```jsx
function jogar(posicao) {
```

Primeiro verificamos se a posição já está ocupada:

```jsx
if (quadrados[posicao] !== null) {
  return;
}
```

Se ela não for `null`, significa que já possui `"X"` ou `"O"`.

O `return` encerra a execução da função.

---

# 16. Por que utilizamos slice()?

Não alteramos diretamente o array que está no estado.

Em vez disso, fazemos uma cópia:

```jsx
const novosQuadrados = quadrados.slice();
```

Sem parâmetros, `slice()` cria uma cópia do array.

Assim:

```text
quadrados
```

continua representando o estado atual.

E:

```text
novosQuadrados
```

é o array que iremos modificar.

Depois fazemos:

```jsx
novosQuadrados[posicao] = "X";
```

ou:

```jsx
novosQuadrados[posicao] = "O";
```

E finalmente atualizamos o estado:

```jsx
setQuadrados(novosQuadrados);
```

---

# 17. Alternando X e O

Nossa função pode verificar de quem é a vez:

```jsx
if (vezDoX) {
  novosQuadrados[posicao] = "X";
} else {
  novosQuadrados[posicao] = "O";
}
```

Depois:

```jsx
setQuadrados(novosQuadrados);
setVezDoX(!vezDoX);
```

Assim:

```text
1ª jogada → X
2ª jogada → O
3ª jogada → X
4ª jogada → O
...
```

---

# 18. Arrow Functions

Em vários pontos utilizamos **Arrow Functions**.

Por exemplo:

```jsx
() => jogar(0)
```

É uma função que, quando executada, chama:

```jsx
jogar(0);
```

Utilizamos:

```jsx
<Quadrado
  valor={quadrados[0]}
  aoClicar={() => jogar(0)}
/>
```

Isso permite informar qual posição deverá ser enviada para a função `jogar()` quando o quadrado for clicado.

---

# 19. Verificando o vencedor

Para descobrir se alguém venceu precisamos conhecer todas as combinações possíveis:

```jsx
const combinacoes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
];
```

As posições correspondem ao tabuleiro:

```text
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
```

Por exemplo:

```javascript
[0, 1, 2]
```

representa a primeira linha.

```javascript
[0, 3, 6]
```

representa a primeira coluna.

```javascript
[0, 4, 8]
```

representa uma diagonal.

---

# 20. Array de arrays

Observe que `combinacoes` é um array que contém outros arrays:

```javascript
[
  [0, 1, 2],
  [3, 4, 5],
  ...
]
```

Portanto:

```javascript
combinacoes[0]
```

é:

```javascript
[0, 1, 2]
```

E:

```javascript
combinacoes[1]
```

é:

```javascript
[3, 4, 5]
```

---

# 21. Desestruturação de arrays

Durante a verificação utilizamos:

```javascript
const [a, b, c] = combinacoes[i];
```

Esse recurso do JavaScript é chamado **desestruturação**.

Imagine que:

```javascript
combinacoes[i]
```

seja:

```javascript
[0, 4, 8]
```

Então:

```javascript
const [a, b, c] = combinacoes[i];
```

faz com que:

```text
a = 0
b = 4
c = 8
```

Seria equivalente a escrever:

```javascript
const a = combinacoes[i][0];
const b = combinacoes[i][1];
const c = combinacoes[i][2];
```

A desestruturação permite escrever isso de maneira mais simples.

---

# 22. Verificando três posições

Depois utilizamos:

```jsx
if (
  quadrados[a] &&
  quadrados[a] === quadrados[b] &&
  quadrados[a] === quadrados[c]
) {
  return quadrados[a];
}
```

Vamos analisar.

## `quadrados[a]`

Primeiro verificamos:

```javascript
quadrados[a]
```

Isso verifica se existe algum valor naquela posição.

Se for:

```javascript
null
```

a condição será falsa.

Se for:

```javascript
"X"
```

ou:

```javascript
"O"
```

a condição será verdadeira.

Isso evita que três posições vazias sejam consideradas uma vitória.

---

Depois verificamos:

```javascript
quadrados[a] === quadrados[b]
```

Ou seja:

> A posição A possui o mesmo valor da posição B?

E:

```javascript
quadrados[a] === quadrados[c]
```

pergunta:

> A posição A possui o mesmo valor da posição C?

Como utilizamos `&&`, todas as condições precisam ser verdadeiras.

Podemos ler o código assim:

> Se A não estiver vazio  
> **E** A for igual a B  
> **E** A for igual a C  
> então encontramos um vencedor.

Por isso:

```javascript
return quadrados[a];
```

Se A contém:

```text
X
```

o vencedor é X.

Se contém:

```text
O
```

o vencedor é O.

---

# 23. Verificando se deu velha

Também precisamos descobrir se o tabuleiro ficou cheio sem nenhum vencedor.

Podemos utilizar:

```jsx
const deuVelha =
  !vencedor && !quadrados.includes(null);
```

Vamos novamente dividir a instrução.

Primeiro:

```javascript
quadrados.includes(null)
```

pergunta:

> Existe algum `null` dentro do array?

Ou seja:

> Existe alguma casa vazia?

Se não existir:

```javascript
!quadrados.includes(null)
```

significa:

> Não existem mais casas vazias.

Mas isso sozinho não significa que deu velha, pois alguém poderia ter vencido na última jogada.

Por isso verificamos:

```javascript
!vencedor && !quadrados.includes(null)
```

Ou seja:

> Não existe vencedor **E** não existem mais casas vazias.

Então o jogo terminou em empate.

---

# 24. Exibindo a situação do jogo

Podemos criar uma mensagem:

```jsx
let mensagem;

if (vencedor) {
  mensagem = "Vencedor: " + vencedor;
} else if (deuVelha) {
  mensagem = "Deu velha!";
} else {
  mensagem = "Próximo jogador: " + (vezDoX ? "X" : "O");
}
```

E no JSX:

```jsx
<p>{mensagem}</p>
```

Novamente podemos observar uma característica importante do React:

> Alteramos os dados e a interface reage às alterações.

---

# 25. Reiniciando o jogo

Para iniciar uma nova partida basta retornar os estados aos seus valores iniciais:

```jsx
function novoJogo() {
  setQuadrados(Array(9).fill(null));
  setVezDoX(true);
}
```

E criar um botão:

```jsx
<button onClick={novoJogo}>
  Novo jogo
</button>
```

---

# 26. Principais recursos de JavaScript utilizados

Durante este projeto utilizamos diversos recursos importantes da linguagem.

### Arrays

```javascript
const numeros = [1, 2, 3];
```

### Array()

```javascript
Array(9)
```

Cria um array com nove posições.

### fill()

```javascript
Array(9).fill(null)
```

Preenche todas as posições com `null`.

### slice()

```javascript
const copia = quadrados.slice();
```

Cria uma cópia do array.

### includes()

```javascript
quadrados.includes(null)
```

Verifica se determinado valor existe no array.

### Desestruturação

```javascript
const [a, b, c] = [0, 1, 2];
```

Resulta em:

```text
a = 0
b = 1
c = 2
```

### Arrow Function

```javascript
() => jogar(0)
```

Cria uma função.

### Operador ternário

```javascript
vezDoX ? "X" : "O"
```

Escolhe um valor de acordo com uma condição.

### Operador de negação

```javascript
!vezDoX
```

Inverte um valor booleano.

### Operador lógico E

```javascript
condicao1 && condicao2
```

As duas condições precisam ser verdadeiras.

### Comparação estrita

```javascript
a === b
```

Verifica se os valores são iguais sem realizar conversão automática de tipo.

---

# 27. O que aprendemos sobre React?

Nosso pequeno Jogo da Velha apresenta vários conceitos fundamentais do React.

## Componentes

Dividimos nossa interface em partes reutilizáveis:

```jsx
<Quadrado />
```

## Props

Passamos informações para componentes:

```jsx
<Quadrado valor={quadrados[0]} />
```

## Eventos

Respondemos às ações do usuário:

```jsx
onClick={aoClicar}
```

## Estado

Guardamos informações que mudam durante a execução:

```jsx
const [quadrados, setQuadrados] = useState(...);
```

## Renderização

Quando o estado muda, o React atualiza a interface.

Podemos resumir o funcionamento do nosso jogo assim:

```text
Usuário clica
      ↓
evento onClick
      ↓
função jogar()
      ↓
estado é alterado
      ↓
React renderiza novamente
      ↓
interface apresenta o novo estado
```

---

# 28. Código completo

```jsx
import { useState } from "react";

function Quadrado({ valor, aoClicar }) {
  return (
    <button onClick={aoClicar}>
      {valor}
    </button>
  );
}

function verificarVencedor(quadrados) {
  const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < combinacoes.length; i++) {
    const [a, b, c] = combinacoes[i];

    if (
      quadrados[a] &&
      quadrados[a] === quadrados[b] &&
      quadrados[a] === quadrados[c]
    ) {
      return quadrados[a];
    }
  }

  return null;
}

function App() {
  const [quadrados, setQuadrados] =
    useState(Array(9).fill(null));

  const [vezDoX, setVezDoX] =
    useState(true);

  const vencedor = verificarVencedor(quadrados);

  const deuVelha =
    !vencedor && !quadrados.includes(null);

  function jogar(posicao) {

    if (quadrados[posicao] !== null || vencedor) {
      return;
    }

    const novosQuadrados = quadrados.slice();

    if (vezDoX) {
      novosQuadrados[posicao] = "X";
    } else {
      novosQuadrados[posicao] = "O";
    }

    setQuadrados(novosQuadrados);
    setVezDoX(!vezDoX);
  }

  function novoJogo() {
    setQuadrados(Array(9).fill(null));
    setVezDoX(true);
  }

  let mensagem;

  if (vencedor) {
    mensagem = "Vencedor: " + vencedor;
  } else if (deuVelha) {
    mensagem = "Deu velha!";
  } else {
    mensagem =
      "Próximo jogador: " +
      (vezDoX ? "X" : "O");
  }

  return (
    <div>
      <h1>Jogo da Velha</h1>

      <p>{mensagem}</p>

      <div>
        <Quadrado valor={quadrados[0]} aoClicar={() => jogar(0)} />
        <Quadrado valor={quadrados[1]} aoClicar={() => jogar(1)} />
        <Quadrado valor={quadrados[2]} aoClicar={() => jogar(2)} />
      </div>

      <div>
        <Quadrado valor={quadrados[3]} aoClicar={() => jogar(3)} />
        <Quadrado valor={quadrados[4]} aoClicar={() => jogar(4)} />
        <Quadrado valor={quadrados[5]} aoClicar={() => jogar(5)} />
      </div>

      <div>
        <Quadrado valor={quadrados[6]} aoClicar={() => jogar(6)} />
        <Quadrado valor={quadrados[7]} aoClicar={() => jogar(7)} />
        <Quadrado valor={quadrados[8]} aoClicar={() => jogar(8)} />
      </div>

      <button onClick={novoJogo}>
        Novo jogo
      </button>
    </div>
  );
}

export default App;
```

---

# Conclusão

Apesar de ser uma aplicação pequena, o Jogo da Velha nos permite compreender vários conceitos fundamentais para o desenvolvimento com React.

O mais importante é perceber a relação entre:

```text
COMPONENTE
    ↓
PROPS
    ↓
EVENTO
    ↓
ALTERAÇÃO DO ESTADO
    ↓
NOVA RENDERIZAÇÃO
```

Em React, normalmente não alteramos diretamente aquilo que aparece na tela.

Alteramos o **estado da aplicação** e o React utiliza esse estado para atualizar a interface.

Esse conceito será utilizado em aplicações muito maiores, como formulários, sistemas de cadastro, lojas virtuais, redes sociais e sistemas web completos.