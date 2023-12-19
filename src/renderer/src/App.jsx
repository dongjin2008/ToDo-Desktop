import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { SideBar } from './components';
import { Home, Graph, User, Settings } from './pages';

function App() {
  return (
    <main className="flex overflow-hidden">
      <div className='shrink grow-0'>
        <SideBar />
      </div>
      <div className='shrink-0 grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/user" element={<User />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
