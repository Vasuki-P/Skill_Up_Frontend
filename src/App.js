import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Learning from './Learning';
import Roles from './Roles';
import IosDeveloper from './IosDeveloper';
import FrontendDeveloper from './FrontendDeveloper';
import BackendDeveloper from './BackendDeveloper';
import FullstackDeveloper from './FullstackDeveloper';
import MachineLearningEngineer from './MachineLearningEngineer';
import UiUxDesigner from './UiUxDesigner';
import SystemArchitect from './SystemArchitect';
import SecuritySpecialist from './SecuritySpecialist';
import CloudEngineer from './CloudEngineer';
import ProductManager from './ProductManager';
import SoftwareEngineer from './SoftwareEngineer';
import DataScientist from './DataScientist';
import SystemsAnalyst from './SystemsAnalyst';
import NetworkEngineer from './NetworkEngineer';
import DataBaseAdministrator from './DataBaseAdministrator';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/roles/:companyId" element={<Roles/>} />
          <Route path="/iosdeveloper" element={<IosDeveloper />} />
          <Route path="/frontenddeveloper" element={<FrontendDeveloper />} />
          <Route path="/backenddeveloper" element={<BackendDeveloper />} />
          <Route path="/fullstackdeveloper" element={<FullstackDeveloper />} />
          <Route path="/machinelearningengineer" element={<MachineLearningEngineer />} />
          <Route path="/uiuxdesigner" element={<UiUxDesigner />} />
          <Route path="/systemarchitect" element={<SystemArchitect />} />
          <Route path="/securityspecialist" element={<SecuritySpecialist />} />
          <Route path="/cybersecurityspecialist" element={<SecuritySpecialist />} />
          <Route path="/cloudengineer" element={<CloudEngineer />} />
          <Route path="/productmanager" element={<ProductManager />} />
          <Route path="/softwareengineer" element={<SoftwareEngineer />} />
          <Route path="/datascientist" element={<DataScientist />} />
          <Route path="/systemsanalyst" element={<SystemsAnalyst />} />
          <Route path="/networkengineer" element={<NetworkEngineer />} />
          <Route path="/databaseadministrator" element={<DataBaseAdministrator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
