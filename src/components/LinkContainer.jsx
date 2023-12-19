
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favLinks: [
        // Your initial link data goes here
      ],
    };
  }

  removeLink = (index) => {
    const updatedLinks = [...this.state.favLinks];
    updatedLinks.splice(index, 1);
    this.setState({ favLinks: updatedLinks });
  };

  handleSubmit = (newLink) => {
    this.setState((prevState) => ({
      favLinks: [...prevState.favLinks, newLink],
    }));
  };

  render() {
    return (
      <div>
        <h2>Link Container</h2>
        <Table linkData={this.state.favLinks} removeLink={this.removeLink} />
        {/* Render the Form component below the Table component */}
        {/* Add other components or content as needed */}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Link Container</h2>
        <Table linkData={this.state.favLinks} removeLink={this.removeLink} />
        {/* Render the Form component below the Table component */}
        <Form />
        {/* Add other components or content as needed */}
      </div>
    );
  }

  handleSubmit = (newLink) => {
    this.setState((prevState) => ({
      favLinks: [...prevState.favLinks, newLink],
    }));
  };

  render() {
    return (
      <div>
        <h2>Link Container</h2>
        <Table linkData={this.state.favLinks} removeLink={this.removeLink} />
        {/* Render the Form component below the Table component */}
        <Form handleSubmit={this.handleSubmit} />
        {/* Add other components or content as needed */}
      </div>
    );
  }

  submitForm = (formData) => {
    this.handleSubmit(formData);
    this.setState({
      name: '',
      url: '',
    });
  };


}

export default LinkContainer;