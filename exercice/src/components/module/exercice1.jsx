import PropTypes  from 'prop-types';
import style from './exercice1.module.css';

const Exercice1 = ({name, age}) =>{

    return (
        <div >
            <p className={style.bienvenu}>Bienvenue {name} sur l'application React</p>
            <p>Vous avez {age} ans... {age >=30 && "HA!"}</p>
        </div>
    )
}

Exercice1.defaultProps= {
    age: 18
}

Exercice1.propTypes= {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}
export default Exercice1;