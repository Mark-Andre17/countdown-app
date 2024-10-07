import { FC, ChangeEvent } from 'react'
import { IInput } from '../types/types'

type InputType = {
    setInputMin: (value: number) => void
    setInputSec: (value: number) => void
}

export const InputValue: FC<InputType> = ({setInputMin, setInputSec}) => {

    const inputMin: IInput = {
        placeholder: 'min',
        maxLength: 3,
        step: 1,
        min: 0,
        max: 720
    }
    const inputSec: IInput = {
        placeholder: 'sec',
        maxLength: 2,
        step: 15,
        min: 0,
        max: 60
    }
    
    function handleInputValueMin(e: ChangeEvent<HTMLInputElement>){

        try{
            if(Number(e.target.value) > 60) {
                setInputMin(0)
                e.target.value = '0'
                throw new Error('Input value must be maximum 60 minutes')
            }
            setInputMin(Number(e.target.value))
        }catch(err){
            alert(err)
        }
    }

    return(
        <form className='block__form'>
            <input 
                type="number"
                step={inputMin.step}
                maxLength={inputMin.maxLength}
                max={inputMin.max}
                min={inputMin.min}
                placeholder={inputMin.placeholder}
                onChange={handleInputValueMin}
            />
            <input 
                type="number"
                step={inputSec.step}
                maxLength={inputSec.maxLength}
                max={inputSec.max}
                min={inputSec.min}
                placeholder={inputSec.placeholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInputSec(Number(e.target.value))}
            />
        </form>
    )
}