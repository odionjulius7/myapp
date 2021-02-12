import React from "react";

// Will Show once out/ deployed
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
           return <h1>oooooops! That Is Not Good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;