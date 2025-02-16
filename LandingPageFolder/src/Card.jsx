import faunaImg from './assets/Fauna.jpeg'
import propTypes from 'prop-types'

function Card(prop){

    return(

        <div className="cardContainer">

            <img src={prop.imgsrc} alt="myImage" />
            <h1 className='title'>{prop.heading}</h1>
            <p className='desc'>{prop.desc}</p>
            
        </div>
    );
}
export default Card