import './components/css/Global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PageLogin from './components/PageLogin'; 
import PageUser from './components/pageUser';
import PageRegistration from './components/PageRegistration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageLogin" element={<PageLogin />} />
        <Route path="/PageUser" element={<PageUser />} />
        <Route path="/PageRegistration" element={<PageRegistration />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;