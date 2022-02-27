
import './navBar.css';
import logo_ne from '../../imgs/logo_ne.png';
function Nav2() {


    return (
        <div className='navBar'>



            <div className='nav'>
                <div className='logo'>
                    <img className='loguito' src={logo_ne} />
                </div>

                <ul className="ul">
                    <li><a className="a" href="https://www.google.com" target="_blank"> Home</a></li>
                    <li><a className="a" href="https://www.google.com" target="_blank"> Productos</a></li>
                    <li><a className="a" href="https://www.google.com" target="_blank" >Acerca de NINA</a></li>
                    <li><a className="a" href="https://www.google.com" target="_blank"> Contacto</a></li>

                </ul>
            </div>

        </div>
    );
}
export default Nav2