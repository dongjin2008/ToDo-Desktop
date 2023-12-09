import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { SideBar } from './components';
import { Home, Graph, User } from './pages';

function App() {
  return (
    <main className="flex">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </main>
  )
}

export default App
