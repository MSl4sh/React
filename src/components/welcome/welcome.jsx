import PropTypes  from 'prop-types';
import style from './welcome.module.css'


const Welcome = ({firstname,lastname, age}) =>{
    

    return (
        <div className={style.demo}>
            <h2>{firstname} {lastname}</h2>
                <p>Votre age est {age} ans</p>
        </div>
    )
}
// Définir les valeur de props par défaut.
Welcome.defaultProps= {
    age: 42
}

//  Ajouter le typage avec Proptypes
Welcome.propTypes= {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number
}
export default Welcome;