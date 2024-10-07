
const enum ButtonText {
    Start = 'start',
    Stop = 'pause',
    Reset ='reset',
    Enter = 'Обратный отсчет',
    Back = 'Вернуться назад'
}

const enum Placeholder{
    Min = 'min',
    Sec = 'sec'
}

interface IInput{
    maxLength: number,
    step: number,
    max: number,
    min: number,
    placeholder: string
}

export { Placeholder, ButtonText }
export type { IInput }