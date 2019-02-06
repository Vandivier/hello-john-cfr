import React, { Component } from 'react';

import { ServiceBaseService } from './services/service-base/service-base.service';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  mBaseService = new ServiceBaseService();

  constructor(props) {
    super(props);

    this.state = {
      sUsername: 'Sessionless Guest'
    };

    this.fGetUserInfoBySession = this.fGetUserInfoBySession.bind(this);

    this.fGetUserInfoBySession()
  }

  // Response from BE Lambda get-user-info-by-session
  fGetUserInfoBySession = async () => {
      // TODO: Try omitting second arg instead of posting empty object
      // TODO: maybe REACT_APP_AWSAG_HOST be preppended within mBaseService.fpPost
      console.log(process.env.REACT_APP_AWSAG_HOST + '/dev/user-info-by-session')
      const oUserInfoResponse = await this.mBaseService.fpPost(process.env.REACT_APP_AWSAG_HOST + '/dev/user-info-by-session', {});

      if (oUserInfoResponse.oError || !oUserInfoResponse.sUsername) {
        // TODO: handle
      } else {
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
