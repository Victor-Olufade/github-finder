import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Notfound from './pages/Notfound';
import {GithubProvider} from './context/github/Githubcontext'
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <main className='container mx-auto px-3 pb-12'>
        <Alerts/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/notfound' element={<Notfound/>}/>
          <Route path='/user/:login' element={<User/>}/>
          <Route path='/*' element={<Notfound/>}/>
        </Routes>
      </main>
      <Footer/>
      </div>
    </Router> 
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
