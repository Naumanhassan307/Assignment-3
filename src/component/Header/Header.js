

import {Navbar}  from "react-bootstrap"


import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LanguageIcon from '@material-ui/icons/Language';


import "./Header.css"

function Header (){
    return(
        <>
            <Navbar>
                <Navbar.Brand> <div><LanguageIcon /></div>  </Navbar.Brand>
                <Navbar.Brand> <div><FavoriteBorderIcon /></div>  </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <h1>COSSO</h1>
                <Navbar.Text>
                </Navbar.Text>
                </Navbar.Collapse>
                <div><AddShoppingCartIcon /></div>
            </Navbar>
        </>    
    )
}
export default Header;

