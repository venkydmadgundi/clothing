import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component.jsx'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';


const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
              currentUser?
              <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>
              :
              <Link to='signin'>Sign In</Link>
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }

    </div>

)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);