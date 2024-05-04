import {useState} from 'react'
import './App.css'
import {MainContentHolder} from "./components/MainDivContentHolder/MainContentHolder.jsx";
import {CounterWrapper} from "./components/CounterWrapper/CounterWrapper.jsx";
import {LinkForVote} from "./components/LinkForVote/LinkForVote.jsx";
import angrySmile from './assets/img/icon_3.png';
import normalSmile from './assets/img/icon_4.png';
import goodSmile from './assets/img/icon_5.jpg';
import {ButtonResult} from "./components/Button/ButtonResult.jsx";
import {ButtonForVote} from "./components/ButtonForVote/ButtonForVote.jsx";

function App() {

    // объект для хранения данных голосования
    let [voteObject, setVoteObject] = useState({
        Nice: '',
        Normal: '',
        Bad: '',
    });

// функция которая передает данные при клике в объект для хранения
function saveVoteResult(lastButtonName, counter) {
        setVoteObject(() => {
            voteObject[lastButtonName] = counter;
        })
}

// подсчеты голосования

    let [lastButton, setLastButton] = useState('');

    function lastButtonPress(lastButtonName, counter) {
        setLastButton(lastButtonName)
        console.log(`name of Key is ${lastButtonName}. Clecked ${counter} times `);

        //здесь все ломается
        saveVoteResult(lastButtonName, counter);

    }

// эта функция должна выводить результат голосования - объект где хранятся данные
    function showResult () {
        console.log(voteObject);
    }


    {/*--------------- эксперементы со стилями ----------------------------                */}
    // let MyButtonNewStyle = {
    //     backgroundColor: 'red',
    //     color: 'white',
    //     borderColor: 'black',
    // };
    //
    // // объект с данными для кнопки Эксперемент 4
    // let SomeNewStyle = {
    //     text: 'Эксперемент 4',
    //     someNewStyle: 'true',
    // };

    return (
        <>
            <MainContentHolder>

      {/*-------------- не знал как вписать пропсы и решил сначала сделать тем путем который понятен -------------          */}
                {/*<CounterWrapper>*/}
                {/*    <LinkForVote>*/}
                {/*        <img src={angrySmile} alt="Not satisfied"/>*/}
                {/*    </LinkForVote>*/}
                {/*</CounterWrapper>*/}

                {/*<CounterWrapper>*/}
                {/*    <LinkForVote>*/}
                {/*        <img src={normalSmile} alt="Norm"/>*/}
                {/*    </LinkForVote>*/}
                {/*</CounterWrapper>*/}

                {/*<CounterWrapper>*/}
                {/*    <LinkForVote>*/}
                {/*        <img src={goodSmile} alt="Good"/>*/}
                {/*    </LinkForVote>*/}
                {/*</CounterWrapper>*/}

                <ButtonForVote buttonBackground={goodSmile} text='Nice' testFunction={lastButtonPress}/>
                <ButtonForVote buttonBackground={normalSmile} text='Normal' testFunction={lastButtonPress}/>
                <ButtonForVote buttonBackground={angrySmile} text='Bad' testFunction={lastButtonPress}/>

            </MainContentHolder>

            <div>
                <h2>I pressed smile: "{lastButton}"</h2>
                <ButtonResult text='Result is' showResultFunction={showResult} />

{/*--------------- эксперементы со стилями ----------------------------                */}
                {/*<ButtonResult className="special" text="Эксперемент 1"/>*/}
                {/*<ButtonResult buttonStyle={MyButtonNewStyle} text="Эксперемент 2"/>*/}
                {/*<ButtonResult someNewStyle={true} text="Эксперемент 3"/>*/}
                {/*<ButtonResult text="Vendetta"/>*/}
                {/*/Эксперемент 4 - присвоить стили и техст из объекта через спред оператор*/}
                {/*<ButtonResult {...SomeNewStyle} />*/}
            </div>


        </>
    )
}

export default App
