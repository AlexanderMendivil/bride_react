import { useEffect, useState } from 'react'
import counterDay from "./counterDay.module.css"
export const CounterDay = () => {

    const [days,setDays] = useState<number>()
    const [hours,setHours] = useState<number>()
    const [minutes,setMinutes] = useState<number>()
    const [seconds,setSeconds] = useState<number>()

    useEffect(() => {
        countDays()
    }, [])
    
    const countDays = () => {
        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24
        const countDate = new Date('Feb 16, 2024 00:00:00').getTime()
        let gap
        let now
        const cb  = () => {
            now = new Date().getTime()
            gap = countDate - now
            setDays(Math.floor( gap / day ))
            setHours(Math.floor( (gap % day) / hour ))
            setMinutes(Math.floor( (gap % hour) / minute ))
            setSeconds(Math.floor( (gap % minute) / second ))  
        }

        setInterval(cb, 1000)

    }
  return (
    <div className={counterDay.container}>

        <div className={counterDay.subcontainer}>
            <p className={counterDay.text}>{ days }</p>
            <p className={counterDay.text}>Días</p>

        </div>

        <div className={counterDay.subcontainer}>
            <p className={counterDay.text}>{ hours }</p>
            <p className={counterDay.text}>Horas</p>

        </div>

        <div className={counterDay.subcontainer}>
            <p className={counterDay.text}>{ minutes }</p>
            <p className={counterDay.text}>Minutos</p>

        </div>

        <div className={counterDay.subcontainer}>
            <p className={counterDay.text}>{ seconds }</p>
            <p className={counterDay.text}>Segundos</p>

        </div>
    </div>    
  )
}
