import React from 'react';
import Either from 'data.either';
import { any } from './helpers';

const nonEmpty = fieldName => value =>
  value.length > 0
    ? Either.of(value)
    : Either.Left(`${fieldName} needs to be filled out`);

const invalidChars = ['%', '*', '!'];
const notInvalidChars = fieldName => value =>
  any(value.split('')
    .map(char => invalidChars.includes(char)))
  ? Either.Left(`${fieldName} has invalid characters`)
    : Either.of(value);

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      name: '',
    };

    this.validateField = this.validateField.bind(this);
  }

  validateField(fieldName, value) {
    const validatedField = nonEmpty(fieldName)(value)
      .chain(validatedValue => notInvalidChars(fieldName)(validatedValue));

    console.log('validatedField', validatedField);
    this.setState({
      ...(
        validatedField.isLeft
          ? {errors: [validatedField.merge()]}
          : {}
      ),
      [fieldName]: validatedField.getOrElse(''),
    });
  }

  render() {
    return (
      <div>
        {
          this.state.errors.map(error => <div key={error}>{error}</div>)
        }
        <input type="text" value={this.state.name} onChange={e => this.validateField('name', e.target.value)} />
      </div>
    );
  }
}

export default Form;
