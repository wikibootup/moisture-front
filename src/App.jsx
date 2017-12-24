import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { moistureInput: '' };

    this.handleMoistureInputChange = this.handleMoistureInputChange.bind(this);
    this.query = this.query.bind(this);
  }

  handleMoistureInputChange(e) {
    this.setState({moistureInput: e.target.value})
  }

  query(e) {
    if (e.key === 'Enter') {
      //@NOTE - It has been hardcoded for test
      fetch('http://localhost:8080/api/search/' + this.state.moistureInput ).then(result => result)
    }
  }

  render() {
    return (
     <div>
        <div className="central-box">
          <input type="text" className="moisture-input"
                 value={this.state.moistureInput}
                 onChange={this.handleMoistureInputChange}
                 onKeyPress={this.query}
                 autoFocus />
        </div>
      </div>
    );
  }
}
