import './styles/index.scss';
import Rentkart from './Component/Rentkart';
import Card from './Component/Card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rentkart />
        <div className='Wrapper'>
 <Card img='' description='' rent=''/>        
     <Card img ='' description='' rent=''/>
     </div>
      </header>
    </div>
  );
}

export default App;
