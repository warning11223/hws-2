import Slider, {SliderProps} from '@mui/material/Slider/Slider'
import React from 'react'

import s from './SuperRange.module.css'

const SuperRange: React.FC<SliderProps> = (props) => {
    const onChangeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        if (props.onChange) {
            props.onChange(event, value, activeThumb)
        }
    }

    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                maxWidth: '147px',
                'color': '#00CC22',
                /*'-webkit-appearance': 'none',
                '-moz-appearance': 'none',
                'appearance': 'none',
                '::-webkit-slider-runnable-track': {
                    borderRadius: '10px/100%',
                    height: '7px',
                    border: '1px solid cyan',
                    backgroundColor: 'red',
                },
                'input::-webkit-slider-thumb': {
                    background: '#ecf0f1',
                    border: '1px solid cyan',
                    borderRadius: '10px/100%',
                    cursor: 'pointer',
                    width: '15px',
                    height: '15px',
                    '-webkit-appearance': 'none',
                    marginTop: '-4px',
                }*/
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            onChange={onChangeHandler}
            className={s.range}
        />
    )
}

export default SuperRange
