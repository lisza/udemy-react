// Error component, new to React 16
// Higher order component, wrap around component that the error is
// related to, in our case <Person> component in App.js
// Meant to be used for errors that might occur in production/ at runtime.
// All other errors shouldn't occur or be handled appropriately,
// not just wrapped and caught.

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error message for our fake error.</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
