const TitleText = () => {
    return <h1 className='text-title absolute bottom-0 w-screen'><span className='text-dark-magenta'>Rapid</span>ity</h1>
}

const Button1 = ({label, onClick, styles}) => {
    return <button className={'text-2xl border-2 px-7 py-2 ' + styles} onClick={onClick}>{label}</button>
}

const SubjectTile = ({subject, icon, styles, onClick}) => {
    return <button className={'text-2xl lg:text-4xl border-2 w-60 h-full lg:w-80 lg:h-4/6 p-5 flex-none min-h-min transition ' + styles} onClick={onClick}>{subject}<br /><span className="material-symbols-outlined text-ixl">{icon}</span></button>
}

const Checkbox = ({name, id, onClick}) => {
    return <>
        <input type="checkbox" id={id} name={name} value={name} onClick={onClick} className="h-4 w-4 lg:h-8 lg:w-8 appearance-none checked:bg-yellow bg-gray" />
        <label for={id} className='text-xl lg:text-4xl ml-5 select-none'>{name}</label><br />
    </>
}

const SubjectHeading = ({text}) => {
    return <h1 className='text-5xl relative my-5'>{text}</h1>
}

const BackButton = ({label, onClick}) => {
    return <button className='text-xl p-2' onClick={onClick}><span className='material-symbols-outlined text-xl align-middle'>arrow_back</span> {label}</button>
}

const QuestionText = ({text}) => {
    return <p className="w-full border-2 p-5 text-2xl grow flex-1">{text}</p>
}

const AnswerBox = () => {
    return <input className="AnswerBox mt-3 w-full p-2 border-2 text-white bg-transparent focus:outline-none flex-none" type="text" name="Answer Box" id="" placeholder="Type answer and ENTER" />
}

const TimerText = ({text}) => {
    return <h3 className="TimerText text-5xl">{text}</h3>
}

const ScoreWidget = ({correct, incorrect, total}) => {
    return <h3 className="ScoreWidget text-5xl">
        <span className="text-green">{correct}</span>/
        <span className="text-red">{incorrect}</span>/
        <span className="text-yellow">{total}</span>
    </h3>
}

const GameModeSelectCard = ({subject, icon, styles, onClick}) => {
    return <button className={'text-2xl lg:text-4xl border-2 w-full h-2/6 lg:w-80 lg:h-4/6 p-5 flex-none min-h-min transition ' + styles} onClick={onClick}>{subject}<br /><span className="material-symbols-outlined text-ixl">{icon}</span></button>
}

export {
    TitleText,
    Button1,
    SubjectTile,
    Checkbox,
    SubjectHeading,
    BackButton,
    QuestionText,
    AnswerBox,
    TimerText,
    ScoreWidget,
    GameModeSelectCard,
}