import './style.css'
import Lixeira from '../../assets/lixo.svg'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function Home() {
const [users, setUsers] = useState([])

  const inputName = useRef(null)
  const inputIdade = useRef(null)
  const inputEmail = useRef(null)
  

async function getUsers(){
  const usersFromApi = await api.get('/users')

  setUsers(usersFromApi.data)  
}
async function createUsers(){
 await api.post('/users', {
  nome: inputName.current.value,
  idade: inputIdade.current.value,
  email: inputEmail.current.value,
  })
  getUsers()
}

  async function deleteUsers(id){
  await api.delete(`/users/${id}`)
  getUsers()
}

  useEffect(() => {
    getUsers()
  },[])

  return (
    
      <div className='container'>
        <form>
          <h1>Cadastro de Usuario</h1>
          <input placeholder='Nome' name='nome' type='text' ref={inputName}/>
          <input placeholder='Idade' name='idade' type='number' ref={inputIdade}/>
          <input placeholder='E-mail' name='email' type='email'ref={inputEmail}/>
          <button type='button' onClick={createUsers}>Cadastrar</button>
        </form>

      {users.map(user => (
          <div key={user.id} className='card'>
              <div>
                  <p>Nome: {user.nome}</p>
                  <p>Idade: {user.idade}</p>
                  <p>Email: {user.email}</p>
              </div>
                <button onClick={() => deleteUsers(user.id)}>
                  <img src={Lixeira}/>
                </button>
          </div>
      ))}


      </div>
  )
}

export default Home
