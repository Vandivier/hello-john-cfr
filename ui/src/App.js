import React, { Component } from 'react';

import { ServiceBaseService } from './services/service-base/service-base.service';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  mBaseService = new ServiceBaseService();

  constructor(props) {
    super(props);

    this.state = {
      sUsername: 'Guest'
    };

    this.fGetUserInfoBySession = this.fGetUserInfoBySession.bind(this);
  }

  // Response from BE Lambda get-user-info-by-session
  fGetUserInfoBySession = async () => {
      // TODO: Try omitting second arg instead of posting empty object
      const oUserInfoResponse = await this.mBaseService.fpPost('/reports/split-panel-by-column', {});

      if (!oUserInfoResponse.oError) {
        this.setState({
          sUsername: oUserInfoResponse.sUsername
        });
      }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello { this.state.sUsername }!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
