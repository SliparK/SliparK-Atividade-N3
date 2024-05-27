import './App.css'
import N2 from './comp/N2'

function App() {
  return (
    <>
      <h2>Entre em Contato</h2>
      <hr />
      <N2
        defaultValue=""
        type="text"
        placeholder="Nome"
      />
      <N2
        defaultValue=""
        type="text"
        placeholder="Email"
      />
      <N2
        defaultValue=""
        type="text"
        placeholder="Telefone"
      />
      <hr/>
      <button>Fatec: Enviar mensagem</button>
    </>
  )
}

export default App
