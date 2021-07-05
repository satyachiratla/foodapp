import React, { Fragment } from 'react';
import classes from './Header.module.css';
import meals from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1> Peddada Meals </h1>
                <HeaderCartButton className={classes.button} onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table full of meals" />
            </div>
        </Fragment>
    )
}

export default Header;
