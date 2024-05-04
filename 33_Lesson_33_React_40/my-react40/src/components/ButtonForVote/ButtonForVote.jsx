import './ButtonForVote.css';
import {useState} from "react";

export function ButtonForVote(props) {

    let {buttonBackground, text, testFunction} = props;

    let buttonDecoration = {
        backgroundImage: `url(${buttonBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '30%'
    };

    let [clickNumbers, setCounter] = useState(0);

    function onClickVoteCount () {
        setCounter(clickNumbers + 1);
        console.log(clickNumbers + 1);
        testFunction(text, clickNumbers + 1);

    }


    return <button
        className='button_votes'
        style={buttonDecoration}
        onClick={onClickVoteCount}

    >
        {text} - {clickNumbers}

    </button>;

}

