import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/SignUp';
import About from './pages/about';
import Profile from './pages/profile';

export default function App() {
  return (    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/Sign-in' element={<SignIn /> } />
          <Route path='/Sign-up' element={<SignUp /> } />
          <Route path='/About' element={<About /> } />
          <Route path='/Profile' element={<Profile /> } />         

      </Routes>
    </BrowserRouter>
  )
}
