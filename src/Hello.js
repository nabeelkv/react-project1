import { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
          <div className="center">
            <h1>Hello World!</h1>
            <p>I created the custom component.</p>
          </div>
        );
    }
}

export default Hello;