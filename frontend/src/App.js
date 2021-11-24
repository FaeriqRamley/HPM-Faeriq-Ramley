import {Routes,Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/ProjectPage';
import DashboardPage from './pages/DashboardPage';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/dashboard/:projectId' element={<ProjectPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
