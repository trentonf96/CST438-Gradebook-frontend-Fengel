import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import Login from './components/Login';
import Grades from './components/Grades';
import Student from './components/Student';
import AddAssignment from './components/AddAssignment';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Gradebook
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/assignment' component={Assignment} />
        <Route path='/student' component={Student} />
        <Route path='/grades' component={Grades} />
        <Route path='/gradebook' component={Gradebook} />
        <Route path='/assignment/:id' component={AddAssignment} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
