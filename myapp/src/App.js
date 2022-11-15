import './App.css';
// import { EmployeList } from './components/EmployeList/employeList';
import Form from './components/form/form';
import Navbar from './components/Navbar/navbar';
import GridView from './components/gridView/gridView';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import EmployeListView from './components/EmployeListView/employeListView';

// let Dummy_data = [{
//   fname: "viren",
//   lname: "as0"
// },
// {
//   fname: "jayesh",
//   lname: "as0"
// },
// {
//   fname: "hardik",
//   lname: "as0"
// }]


function App() {


  return (

    <>
      <Router>
        <Navbar exact path="/" />

        <Switch>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/EmployeListView">
            <EmployeListView />
          </Route>

          <Route exact path="/gridView">
            <GridView />
          </Route>
        </Switch>


      </Router>

      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm mode={mode} modetxt={modetxt} showAlert={showAlert} toggelMode={toggelMode} title="Example textarea" />
          </Route>
        </Switch>

      </Router> */}

      {/*   <EmployeList items={Dummy_data} /> */}

    </>
  )
}

export default App;
