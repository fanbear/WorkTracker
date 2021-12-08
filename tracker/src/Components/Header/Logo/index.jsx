import Logotype from "../../../Img/logo.png";
import './index.css';

const Logo = () => {
    return (
        <a href="/" class="logo">
            <img src={Logotype} width="194" height="30" alt="logo" />
        </a>
    );
}

export default Logo;