import { useState } from 'react';
import './index.css';
import TimerPlay from '../../../../Img/timer-play.png';
import TimerStop from '../../../../Img/timer-stop.png';
import TimerSave from '../../../../Img/timer-save.png';
import PopupTimer from './PopupTimer/index';

const Timer = (props) => {
    const [active, setActive] = useState(false);
    const [saveTimer, setSaveTimer] = useState(false);

    return (
        <div className="timer-wrapper">
            <div className="timer__tracker"></div>
            <div className="timer__action">
                <button onClick={() => !active ? setActive(true) : setActive(false)} className="timer__toggle">
                    {active
                        ? <img src={TimerStop} alt="timer-stop" />
                        : <img src={TimerPlay} alt="timer-play" />
                    }
                </button>
                <button onClick={() => setSaveTimer(true)} className="timer__save">
                    <img src={TimerSave} alt="timer-save" />
                </button>
            </div>
            {saveTimer
                ? <PopupTimer close={setSaveTimer} />
                : ''
            }
        </div>
    );
};

export default Timer;