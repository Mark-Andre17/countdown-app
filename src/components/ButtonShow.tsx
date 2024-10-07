import { FC } from "react"

type BtnProps = {
    btnText: string,
    setVisible: (value: boolean) => void,
    visible: boolean
}

export const ButtonShow: FC<BtnProps> = ({btnText, setVisible, visible}) =>{

    return (
        <button className="show__btn" onClick={() => setVisible(!visible)}>{btnText}</button>
    )
}