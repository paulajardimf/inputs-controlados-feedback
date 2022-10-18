import React, {useState} from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = () => {
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [race, setRace] = useState("")
  const [period, setPeriod] = useState("")
  const [schooling, setSchooling] = useState("")
  const [availability, setAvailability] = useState("")

  const onChangeDateOfBirth = (event) => {
    setDateOfBirth(event.target.value)
  }
  
  const onChangePhone = (event) => {
    setPhone(event.target.value)
  }

  const onChangeGender = (event) => {
    setGender(event.target.value)
  }

  const onChangeRace = (event) => {
    setRace(event.target.value)
  }

  const onChangePeriod = (event) => {
    setPeriod(event.target.value)
  }

  const onChangeSchooling = (event) => {
    setSchooling(event.target.value)
  }

  const onChangeAvailability = (event) => {
    setAvailability(event.target.value)
  }

  function send() {
    if(dateOfBirth === "" || phone === ""){
      alert('Preencha todos os campos!')
    } else if (gender === "" || race === ""){
    alert('Preencha todos os campos!')
    } else {
      alert('Seus dados foram enviados!')
    }
  }

  return (
    <Form>
      <label>
        Data de Nascimento:
        <Input type={'date'} value={dateOfBirth} onChange={onChangeDateOfBirth} />
      </label>
      <label>
        Telefone:
        <Input type={'phone'} value={phone} onChange={onChangePhone} />
      </label>
      <label>
        Selecione o seu gênero:
        <select value={gender} onChange={onChangeGender}>
          <option value=''>---</option>
          <option value='Mulher Cisgênero'>Mulher Cisgênero</option>
          <option value='Homem Cisgênero'>Homem Cisgênero</option>
          <option value='Mulher Transgênero'>Mulher Transgênero</option>
          <option value='Homem Transgênero'>Homem Transgênero</option>
          <option value='Pessoa não binária'>Pessoa não binária</option>
          <option value='Prefiro não dizer'>Prefiro não dizer</option>
        </select>
      </label>
      <label>
        Selecione a sua cor/raça:
        <select value={race} onChange={onChangeRace}>
        <option value=''>---</option>
          <option value="Negro">Negro</option>
          <option value="Branco">Branco</option>
          <option value="Amarelo">Amarelo</option>
          <option value="Pardo">Pardo</option>
          <option value="Indígena">Indígena</option>
          <option value="Prefiro não dizer">Prefiro não dizer</option>
        </select>
      </label>
      <label>
        <p>Selecione a modalidade do curso</p>
        <input type="radio" name="curso" value= {period} onChange = {onChangePeriod}/>
        <label for="integral">Curso Integral Web Fullstack</label>
        <input type="radio" name="curso" value={period} onChange={onChangePeriod} />
        <label for="noturno">Curso Noturno Web Fullstack</label>
      </label>
      <label>
        <p>Selecione:</p>
        <input type="checkbox" name="escolaridade" value={schooling} onChange={onChangeSchooling} />
        <label for='ensino-medio'>Ensino médio completo</label>
        <input type="checkbox" name="disponibilidade" value={availability} onChange={onChangeAvailability} />
        <label for='disponibilidade'>Tenho disponibilidade de horários</label>
      </label>
      <button onClick={send}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm