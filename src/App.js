import './style.css';
import React, {useEffect, useState} from 'react';
import DropdownCountries from './components/DropDownCountry';
import DropdownCities from './DropDownCity';
import Select from 'react-select';


function App() {
  return(
    <><div className='DadosP'><h1>Dados Pessoais</h1>
      <form>
        <input required type="text" name="nome" placeholder="Nome"></input>

        <input required type="text" name="email" placeholder="Email"></input>

        <input required type="number" name="telefone" placeholder="Telefone"></input>

        <input required type="number" name="cpf" placeholder="Cpf"></input>

        <h1>Destinos de Interesse</h1>
          
            <label htmlFor="country">País:</label>
            <DropdownCountries />
            <label htmlFor="cities">Cidade:</label>
            <DropdownCities />

            <button>Enviar</button>

      </form>
    </div></>
    
          
      
    
     





  )}

export default App;