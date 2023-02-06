import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let redBtn = `${xType === 'red' ? `${s.red}` : ''}`
    let defaultBtn = `${xType === 'default' ? `${s.default}` : ''}`
    let secondaryBtn = `${xType === 'secondary' ? `${s.secondary}` : ''}`
    let disabledBtn = `${xType === 'disabled' ? `${s.disabled}` : ''}`

    const finalClassName = `${s.button} ${redBtn} ${defaultBtn} ${secondaryBtn} ${disabledBtn}`

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
