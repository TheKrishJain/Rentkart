import { Provider } from 'react-redux';
import React from 'react';
import store from './redux/store';
import MainRoutes from './routes';
import './styles/index.scss';
import Dropdown from './component/Dropdown';

function App() {
  const [selected,setSelected]=React.useState('Choose one');
  return (
    
    <Dropdown selected={selected} setSelected={setSelected}/>
  
  );
}

export default App;

