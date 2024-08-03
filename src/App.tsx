import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <nav>
        <div className='container'>
          <div className='menu'>
            <a href='/'>Home</a>
            <a href='/add'>Add New Employee</a>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
