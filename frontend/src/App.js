import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/ProjectPage';
import DashboardPage from './pages/DashboardPage';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/projects/:projectId' element={<ProjectPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
