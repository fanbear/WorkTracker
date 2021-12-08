import './index.css';
import UserIcon from '../../../Img/user-icon.png';
import ArrowDown from '../../../Img/arrow-down.png';
import { useState } from 'react';

const User = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="user">
            <div className="user-name">Привет, {props.userName}</div>
            <div className="user-action">
                <img src={UserIcon} alt="user-logo" />
                <button onClick={() => { !open ? setOpen(true) : setOpen(false) }}>
                    <img className={open ? 'rotate' : ''} src={ArrowDown} alt="arrow-down" />
                </button>
            </div>
            {
                open ?

                    < div className="user-list">
                        <a href="/">Личные данные</a>
                        <a href="/">Мои задания ( 1 )</a>
                        <a href="/">Завершенные ( 10 )</a>
                        <a href="/">Опции</a>
                    </div >
                    :
                    ''
            }
        </div >
    );
}

export default User;