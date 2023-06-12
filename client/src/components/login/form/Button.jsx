import '../../css/button.css'

function Button({text, handleOnClick}) {
    return (
        <div className='button'>
            <button onClick={handleOnClick}>{text}</button>
        </div>
    )
}

export default Button

