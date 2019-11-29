import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/img/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
  <div className={'header'}>
    <Link to={'/'} className={'logo-container'}>
      <Logo className={'logo'}/>
    </Link>
    <div className={'options'}>
      <Link to={'/shop'} className={'option'}>
        SHOP
      </Link>
      <Link to={'/shop'} className={'option'}>
        CONTACT
      </Link>
      {
        currentUser ?
          (<div className={'option'} onClick={() => auth.signOut()}>SIGN OUT</div>)
          :
          (<Link className={'option'} to={'/signin'}>SIGN IN</Link>)
      }
      <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropdown/>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
