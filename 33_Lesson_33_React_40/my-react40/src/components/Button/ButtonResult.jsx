import './ButtonResult.css';
import {useState} from "react";


export function ButtonResult(props) {
    let {className, text, buttonStyle, someNewStyle, showResultFunction} = props;


    function handlClick() {
        showResultFunction();

    }

    return <button
        // присвоение стилей несколькими способами:
        // - общий стиль my_button через className непосредственно в компоненте (т.е. здесь)
        // - присвоение альтернативного стиля special через атрибут className в файле Арр ("Эксперемент 1")
        // - присвоение альтернативного стиля buttonStyle через создание объекта MyButtonStyle в Арр файле
        // в котором свойства описывабт внешний кнопки (т.н. объектные литералы)("Эксперемент 2")
        // - присвоение альтернативного стиля someNewStyle с помощью тернарного оператора (если someNewStyle имеет
        // значение true (что указано в Арр), тогда выполняется стиль someNewStyle,
        // если false тогда обычный стиль my_button) Эксперемент 3
        //Эксперемент 4 - присвоить стили и техст из объекта через спред оператор
        className={`my_button ${className} ${someNewStyle ? 'someNewStyle' : `my_button`}`} style={buttonStyle}
        onClick={handlClick}
    >
        {text} -
    </button>;

}