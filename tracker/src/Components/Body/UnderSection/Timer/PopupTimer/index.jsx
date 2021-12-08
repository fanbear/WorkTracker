import './index.css';
import Close from '../../../../../Img/close.png';


const PopupTimer = (props) => {
    return (
        <div className="save-timer">
            <button onClick={() => props.close(false)} className="save-timer__close"><img src={Close} alt="close" /></button>
            <p>Вы хотите завершить задачу?</p>
            <div className="save-timer__action">
                <button className="basic-btn">Да</button>
                <button className="basic-btn">Нет</button>
            </div>
        </div>
    );
}

export default PopupTimer;