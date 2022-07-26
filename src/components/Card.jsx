import '../styles/card.css';

function Card (props) {
    return (
        // <div className='card'>
        //     <div>
        //         <h3 className='title'>{props.name}</h3>
        //     </div>
        //     <div>
        //         <img src={props.picture} alt={props.name} />
        //     </div>
        //     <div className='card-item'>
        //         <h3>$ {props.price}</h3>
        //     </div>
        // </div>
        <div className='card'>
        <div>
            <img src={props.picture} alt={props.name} />
        </div>
        <div>
            <h2 className='title'>{props.name}</h2>
        </div>
        <div className='card-item'>
            <h3>$ {props.price}</h3>
        </div>
    </div>
    );
};

export default Card;