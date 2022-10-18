import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [emailConfirmation, setEmailConfirmation] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeEmailConfirmation = (event) => {
  setEmailConfirmation(event.target.value)
}

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos

  if(name === "" || age === "" || email === "" || emailConfirmation === "") {
    alert('Todos os campos são obrigatórios.')
  } else if (age < 18){
    alert('Você precisa ter mais de 18 anos para se inscrever.')
  } else if (name.length < 10 || name.length > 30){
    alert('O nome deve ter entre 10 e 30 caracteres.')
  } else if (email !== emailConfirmation){
    alert('O campo confirmação de email não confere')
  } else {
    setFormFlow(2)
  }
  
}
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      // insira aqui suas props
      name={name} age={age} email={email} emailConfirmation={emailConfirmation} onChangeName={onChangeName} onChangeAge={onChangeAge} onChangeEmail={onChangeEmail} onChangeEmailConfirmation={onChangeEmailConfirmation} sendData={sendData} setFormFlow={setFormFlow}
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage