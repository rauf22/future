import React, { Component } from 'react';
import IconLabelButton from '../Button/Button';
import Form from '../Form/Form';
import './AddRow.css';

class AddRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      isOpenForm: false,
    };
  }

  clickHandler = () => {
    this.setState({
      clicked: true,
      isOpenForm: true,
    });
    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <IconLabelButton
          value={'Add Row'}
          onClick={this.clickHandler.bind(this)}
        />
        <Form
          isOpenForm={this.state.isOpenForm}
          setStateA={this.props.setStateA}
        />
      </div>
    );
  }
}

export default AddRow;
