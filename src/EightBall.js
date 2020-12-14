import React, {useState} from 'react';
import './EightBall.css';

const EightBall = (props) => {
    const setBall = () => {
        const ran = Math.floor(Math.random() * props.answers.length);
        setMessage(props.answers[ran].msg);
        setColor(props.answers[ran].color);
        if(props.answers[ran].color === 'green') {
            setGreen(green + 1);
        } else if(props.answers[ran].color === 'goldenrod') {
            setYellow(yellow + 1);
        } else {
            setRed(red + 1);
        }
    }
    const [message, setMessage] = useState('Think of a Question');

    const [colorr, setColor] = useState('black');

    const [green, setGreen] = useState(0)
    const [yellow, setYellow] = useState(0)
    const [red, setRed] = useState(0)

    const reset = () => {
        setMessage('Think of a Question');
        setColor('black');
        setGreen(0);
        setYellow(0);
        setRed(0);
    }
    return (
        <div className='EightBall'>
            <div style={{backgroundColor: colorr}}className='EightBall-div' onClick={setBall}>
                <h1 className='EightBall-text'>{message}</h1>
            </div>
            <button onClick={reset}className='EightBall-btn'>Reset</button>
            <p className='EightBall-p'>Green: {green}</p>
            <p className='EightBall-p'>Yellow: {yellow}</p>
            <p className='EightBall-p'>Red: {red}</p>
        </div>
    )
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}

export default EightBall;