import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          URL:
          <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          URL:
          <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={() => this.props.handleSubmit(this.state)}>Submit</button>
      </form>
    );
  }

}

export default Form;