import React from 'react';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <div className="central-box">
          <form>
            <input className="moisture-input" type="text" autoFocus />
          </form>
        </div>
      </div>
    );
  }
}
