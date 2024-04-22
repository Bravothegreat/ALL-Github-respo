
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(properties) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, details) {
    console.error('Error caught by ErrorBoundary:', error, details);
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <h2>
        Something went wrong, Please try again later.
      </h2>
  }
     return this.properties;
}
}

export default ErrorBoundary;