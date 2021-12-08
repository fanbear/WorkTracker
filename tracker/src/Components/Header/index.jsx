import Logo from './Logo/index';
import User from './User/index';
import './index.css';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <User userName="Nike" />
        </div>
    );
}

export default Header;