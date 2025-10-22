
import '../main.css';

const inputCommon = "bg-transparent pl-4 pb-3 rounded-full border-2 m-1 p-2";

export const inputColor = {
    pink: 'text-pink-60 border-pink-60',
    yellow: 'text-yellow-60 border-yellow-60',
    lime: 'text-lime-60 border-lime-60'
}

export function Input({value, onChange, placeholder, color=inputColor.yellow}) {
    return (
        <input type="text" value={value} onChange={onChange} placeholder={placeholder} className={inputCommon + ' ' + color}/>
    );
}

export function InputSecure({value, onChange, placeholder, color=inputColor.yellow}) {
    return (
        <input type="password" value={value} onChange={onChange} placeholder={placeholder} className={inputCommon + ' ' + color}/>
    );
}


export const buttonColor = {
    pink: ['hover:bg-pink-60 hover:border-pink-60 dark:text-pink-60','text-pink-45 hover:text-pink-45'],
    yellow: ['hover:bg-yellow-60 hover:border-yellow-60 dark:text-yellow-60','text-yellow-45 hover:text-yellow-45'],
    lime: ['hover:bg-lime-60 hover:border-lime-60 dark:text-lime-60','text-lime-45 hover:text-lime-45']
}

export function Button({onClick, children, color=buttonColor.yellow, disabled=false}) {
    
    const buttonCommon = `border-2 hover:text-black rounded-full w-3/5 m-1 p-0.3 pb-1 text-center`

    return (
        <button onClick={disabled ? () => {} : onClick} className={buttonCommon + ' ' + color[disabled ? 1 : 0]}>{children}</button>
    );
}

export const textColor = {
    pink: 'text-pink-60',
    yellow: 'text-yellow-60',
    lime: 'text-lime-60'
}

export function Subtext({color, text}) {
    return (text && <>
    <p className={color}>{text}</p>
    </>)
}

export function LabelledBox({children, onChange}) {
    return (<div className="flex items-center">
        <input 
            type="checkbox"
            onChange={(e) => onChange?.(e.target.checked, e)}
            className="form-checkbox rounded-md h-8 w-8 bg-lime-45/50 border-lime-60/50 border-2 text-lime-60"/>
        <p className="ml-5">{children}</p>
    </div>)
}