import { useState, FC } from "react"
import { InputValue } from "./components/InputValue"
import { ButtonText } from "./types/types"
import { Countdown } from "./components/Countdown"
import { ButtonShow } from "./components/ButtonShow"
import './assets/styles/light.css'
import './assets/styles/dark.css'


const App: FC = () => {
    
    const [inputMin, setInputMin] = useState<number>(0)
    const [inputSec, setInputSec] = useState<number>(0)
    const [visible, setVisible] = useState<boolean>(false)
    
    return (
        <div className={!visible ? 'light__block' : 'dark__block'} >
            <ButtonShow btnText={!visible ? ButtonText.Enter : ButtonText.Back} setVisible={setVisible} visible={visible}/>
            {!visible ? 
            <InputValue setInputMin={setInputMin} setInputSec={setInputSec}/> : 
            <Countdown inputMin={inputMin} inputSec={inputSec}/>}
        </div>
    );
}

export default App;
