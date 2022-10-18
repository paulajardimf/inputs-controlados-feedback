import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {
  return (
    <Form>
        <label>
          Nome:
          <Input  placeholder="Nome" type={'text'} value={props.name} onChange={props.onChangeName}/>
        </label>
        <label>
          Idade:
          <Input  placeholder="Idade" type={'number'} value={props.age} onChange={props.onChangeAge}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" type={'email'} value={props.emailConfirmation} onChange={props.onChangeEmailConfirmation}/>
        </label>
      <button onClick={props.sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm