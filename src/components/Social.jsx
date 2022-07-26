import google from '../pictures/google.png';
import apple from '../pictures/apple-logo.png';
import facebook from '../pictures/facebook.png';
import '../styles/login.css';

function Social (props) {
    return (
        <div className='social'>
            <img className="soc" src={google} alt="google" />
            <img className="soc" src={apple} alt="apple" />
            <img className="soc" src={facebook} alt="facebook" />
            
        </div>
    );
};

export default Social;