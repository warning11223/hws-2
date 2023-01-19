import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
    children: React.ReactNode
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let redBtn = `${restProps.children === 'red' ? `${s.red}` : ''}`
    let defaultBtn = `${restProps.children === 'default' ? `${s.default}` : ''}`
    let secondaryBtn = `${restProps.children === 'secondary' ? `${s.secondary}` : ''}`
    let disabledBtn = `${restProps.children === 'disabled' ? `${s.disabled}` : ''}`

    const finalClassName = `${s.button} ${redBtn} ${defaultBtn} ${secondaryBtn} ${disabledBtn}`

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
