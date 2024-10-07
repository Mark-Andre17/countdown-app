import { FC } from 'react'

type ProgressType = {
    timer: number
}

export const Progress: FC<ProgressType> = ({timer}) => {
    

    return (
        <div className="wrapper__block">
            <div className='progress__block' style={{
                width: `${timer}%`,
                height: '45px',
                borderRadius: '5px',
                transition: 'width 0.1s linear',
                backgroundColor: 'black'
            }}></div>
        </div>
        
    )
}