import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import Authentication from '../authentication/authentication.component';

const Navigation = () => {
    return (
      <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
        </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            <Link className='nav-link' path='auth' to='/auth' element={ <Authentication /> }>
              SIGN IN
              </Link>
            </div>
          </div>
          <Outlet />
      </Fragment>
      );
  }

  export default Navigation;