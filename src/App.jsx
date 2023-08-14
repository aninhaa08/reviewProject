import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>
      <main>
        <form action="">
          <div>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id='usuario' placeholder='Digite seu usuário' />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id='senha' placeholder='Digite sua senha'/>
          </div>
          <button>Entrar</button>
        </form>
      </main>
    </>
  )
}

export default App