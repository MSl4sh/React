import './App.css';
import Welcome from './components/welcome/welcome';

const App = ({firstname, lastname, age}) =>{
    return (
      <div>
      <Welcome firstname = 'Donovan' lastname='Duperrois' age={30}/>
      <hr />
      <Welcome firstname = 'Della' lastname='Duck'/>
    </div>
  );
};


export default App;
