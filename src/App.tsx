import './App.css';
import 'devextreme/dist/css/dx.light.css';

// Components
import Navbar from './components/Navbar';
import Datagrid from './components/Datagrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Datagrid />
    </div>
  );
}

export default App;
