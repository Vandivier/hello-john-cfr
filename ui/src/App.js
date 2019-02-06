import React, { Component } from 'react';

import { ServiceBaseService } from '../services/service-base/service-base.service';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  mBaseService = new ServiceBaseService();

  constructor(props) {
    super(props);

    this.state = {};

    this.fHandlePanelLineGraphVariableChange = this.fHandlePanelLineGraphVariableChange.bind(this);
  }

  // if you use the LineGraphVariable option, you can only upload one master spreadsheet
  // given one report (a panelreport, or master spreadsheet, or panel-in-report), split it into arr of report
  // server will do the splitting
  fHandlePanelLineGraphVariableChange = async e => {
      let arroPromises = [];
      const iColumnDiscriminator = e.target.value;
      const name = e.target.name;
      const oExistingReport = this.state.arrFiles[0];
      let arroResponses = [];

      if (!oExistingReport || !iColumnDiscriminator) return Promise.resolve();

      arroPromises = [oExistingReport].map(file => {
          const formdata = new FormData();
          formdata.append('reportInputData', file);
          formdata.append('iColumnDiscriminator', iColumnDiscriminator);

          return this.mBaseService.fpPost('/reports/split-panel-by-column', {
              oFormData: formdata,
          });
      });

      arroResponses = await Promise.all(arroPromises);

      if (arroResponses.length) {
          const arroNewReportDatas = this.farrProcessReport(arroResponses[0].arroReportDatas);
          this.setState({
              arroReportDatas: arroNewReportDatas,
              arroUnfilteredReportDatas: arroNewReportDatas,
              [name]: iColumnDiscriminator,
          });
      } else {
          // TODO: handle
      }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
