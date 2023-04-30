import '../styling/Header.styles.css'; 
import logo from '../img/Ned.png';
const Header = () => {
    return(
        <div className = 'Header'>
            <div className='Box'>
                <img src={logo} alt='Ned-Logo' className='Ned-logo'/>
            </div>
        </div>
    )
}

export default Header; 