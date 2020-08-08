import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setStateA(this.state);
  }

  render() {
    let className = 'form';
    if (this.props.isOpenForm) {
      className += 'open';
    }

    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <label>
          Id:
          <input type="number" name="id" onChange={this.handleChange} />
        </label>
        <label>
          Firs Name:
          <input type="text" name="firstname" onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastname" onChange={this.handleChange} />
        </label>
        <label>
          E-mail:
          <input type="text" name="email" onChange={this.handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" onChange={this.handleChange} />
        </label>
        <label>
          streetAdress:
          <input type="text" name="street" onChange={this.handleChange} />
        </label>
        <label>
          city:
          <input type="text" name="city" onChange={this.handleChange} />
        </label>
        <label>
          state:
          <input type="text" name="state" onChange={this.handleChange} />
        </label>
        <label>
          zip:
          <input type="text" name="zip" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Send" />
      </form>
    );
  }
}
export default Form;
