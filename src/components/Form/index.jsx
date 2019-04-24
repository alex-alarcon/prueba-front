import React, { Component } from 'react';
import './index.css';

const isEmpty = data => {
  return data === '' || data === null || typeof data === 'undefined';
};

const isValidEmail = email => {
  const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValid = regexp.test(email);

  return isValid;
};

const isValidEdad = edad => {
  const isNumber = Number.isInteger(edad);
  const inRange = edad >= 18 && edad <= 100;

  return isNumber && inRange;
};

class Form extends Component {
  state = {
    values: {}
  };

  handleChange = event => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    const {
      values: { nombre, email, celular, edad },
      values
    } = this.state;
    const { onSubmit } = this.props;
    if (isEmpty(nombre)) {
      console.log(`El nombre esta vacio`);
      return false;
    }
    if (isEmpty(email)) {
      console.log(`El email esta vacio`);
      return false;
    }
    if (isEmpty(celular)) {
      console.log(`El celular esta vacio`);
      return false;
    }
    if (isEmpty(edad)) {
      console.log(`La edad esta vacio`);
      return false;
    }
    if (!isValidEmail(email)) {
      console.log(`El email no es valido`);
      return false;
    }
    if (!isValidEdad(parseInt(edad, 10))) {
      console.log(`La edad no esta en el rango`);
      return false;
    }
    values.edad = parseInt(values.edad, 10);
    onSubmit(values);
    return true;
  };

  render() {
    return (
      <div className="Form__container">
        <h3>
          Hola, bienvenido, sabemos que quieres viajar en un X, por favor
          diligencia el siguiente formulario
        </h3>
        <form className="Form">
          <input
            type="text"
            className="Form__input"
            placeholder="nombre"
            name="nombre"
            onInput={this.handleChange}
          />
          <br />
          <input
            type="email"
            className="Form__input"
            placeholder="email"
            name="email"
            onInput={this.handleChange}
          />
          <br />
          <input
            type="text"
            className="Form__input"
            placeholder="celular"
            name="celular"
            onInput={this.handleChange}
          />
          <br />
          <input
            type="number"
            className="Form__input"
            placeholder="edad"
            min="18"
            max="100"
            step="1"
            name="edad"
            onInput={this.handleChange}
          />
          <br />
          <button
            type="button"
            onClick={this.handleSubmit}
            className="Form__button"
          >
            Aceptar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
