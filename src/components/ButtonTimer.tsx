import { FC } from "react"

type ButtonTimerType = {
    text: string,
    checked?: boolean,
    onClick: () => void,
}
export const ButtonTimer: FC<ButtonTimerType> = ({text, onClick}) => {
    return (
        <button className="timer__btn" onClick={onClick}>{text}</button>
    )
}