import { useState } from 'react';

function Home() {
  return (
    <div>
      <h1>Home 3</h1>
      <Contador />
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => adicionarContador()}>Adicionar</button>
    </div>
  )
}

export default Home;