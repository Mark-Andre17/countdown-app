import { FC, useState } from "react"
import { ButtonTimer } from "./ButtonTimer"
import { Progress } from "./Progress"
import { ButtonText } from "../types/types"

type CountdownType = {
    inputMin: number,
    inputSec: number
}


export const Countdown: FC<CountdownType> = ({inputMin, inputSec}) => {

    let allTime: number = (inputMin * 60) + inputSec
    const [timer, setTimer] = useState(allTime)
    const [check, setCheck] = useState(false)
    const [timerInterval, setTimerInterval] = useState<ReturnType<typeof setInterval> | null>(null)
    const [progress, setProgress] = useState<number>(100)

    let formattedTime: string = `${("0" + Math.floor(timer / 60)).slice(-2)} : ${("0" + (timer % 60)).slice(-2)}`

    function startTimer(): void {
        setCheck(true);
        try{
            if(timer === 0){
                throw new Error('Timer is null');
            }
            if (timerInterval !== null) {
                return;
            }
            const newInterval = setInterval(() => {
                setTimer((prevTime) => {
                    try {
                        if (prevTime === 0) {                       
                            setCheck(false);
                            setProgress(100);
                            throw new Error('Timer is null or negative');
                        } else {
                            const newTime: number = prevTime - 1;
                            const newProgress: number = (newTime / allTime) * 100;
                            setProgress(newProgress);
                            return newTime;
                        }
                    } catch (e) {
                        alert(e);
                        clearInterval(newInterval);
                        setTimerInterval(null);
                        return prevTime;
                    }
                });
            }, 1000);
            setTimerInterval(newInterval);
        } catch (e) {
            setCheck(false);
            alert(e);
        }
    }
 
    function stopTimer(): void{
        setCheck(false)
        if(timerInterval !== null){
            clearInterval(timerInterval)
            setTimerInterval(null)
        }
    }

    function resetTimer(): void{
        if(timerInterval !== null){
            setCheck(false)
            clearInterval(timerInterval)
            setTimerInterval(null)
            setTimer(0)
            setProgress(100)
        }else if(timer){
            setCheck(false)
            setTimerInterval(null)
            setTimer(0)
            setProgress(100)
        }
    }

    return (
        <div className="countdown__block">
            <p className="countdown">{formattedTime}</p>
            <div className="btn__block">
                {!check ? 
                <ButtonTimer onClick={startTimer} text={ButtonText.Start}/> : 
                <ButtonTimer onClick={stopTimer} text={ButtonText.Stop}/>}
                <ButtonTimer onClick={resetTimer} text={ButtonText.Reset}/>
            </div>
            <Progress timer={progress}/>
        </div>
    )
}