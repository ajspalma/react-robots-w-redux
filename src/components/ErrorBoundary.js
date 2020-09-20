import React, { Component } from 'react'; 

class ErrorBoundary extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    // catch error (new life-cycle hook) 
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            // will be displayed in production 
            // when an error is thrown 
            return <h1>Ooops. That is not good.</h1>
        } 
        return this.props.children;
    }

}

export default ErrorBoundary;