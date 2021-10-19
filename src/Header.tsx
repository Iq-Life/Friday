import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


function Header() {

    return (
        <div style={{display: "flex", justifyContent: "flex-end"}}>
            <div className={s.headerMenu}>
                <div className={s.block}/>
                <ul className={s.list}>
                    <li>
                        <NavLink to='/registration' activeClassName={s.activeLink}
                                 className={s.link}>registration</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login' activeClassName={s.activeLink}
                                 className={s.link}>login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' activeClassName={s.activeLink}
                                 className={s.link}>profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/password-recovery' activeClassName={s.activeLink}
                                 className={s.link}>password-recovery</NavLink>
                    </li>
                    <li>
                        <NavLink to='/entering-a-new-password' activeClassName={s.activeLink}
                                 className={s.link}>entering-a-new-password</NavLink>
                    </li>
                    <li>
                        <NavLink to='/testing' activeClassName={s.activeLink}
                                 className={s.link}>testing</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header