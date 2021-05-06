

import {Navbar}  from "react-bootstrap"


import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LanguageIcon from '@material-ui/icons/Language';



import "./header.css"

function Header (){
    return(
        <>
            <Navbar sticky="top" >
                <Navbar.Brand> <div><LanguageIcon /></div>  </Navbar.Brand>
                <Navbar.Brand> <div><FavoriteBorderIcon /></div>  </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <h1 className="ttlName">COSSO</h1>
                <Navbar.Text>
                </Navbar.Text>
                </Navbar.Collapse>
                <div><AddShoppingCartIcon /></div>
            </Navbar>
        </>    
    )
}
export default Header;

