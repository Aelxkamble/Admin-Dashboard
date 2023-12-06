
import Sidebar from './Sidebar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex">
      <div className='w-auto'>
        <Sidebar></Sidebar>
      </div>
      <div className='col'></div>
    </div>
  );
}

export default App;
