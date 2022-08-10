import './App.css';
import Exercice1 from './components/module/exercice1';

const App = ({name, age}) =>{
    return (
      <div>
      <Exercice1 name='Donovan Duperrois' age={30}/>
    </div>
  );
};


export default App;
