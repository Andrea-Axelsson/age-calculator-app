import React, { useState, useEffect } from 'react';

const AgeForm = () => {
    
    const [day, setDay] = useState<number>(0)
    const [month, setMonth] = useState<number>(0)
    const [year, setYear] = useState<number>(0)

    const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dayValue : number = Number(e.target.value)
        setDay(dayValue)
        console.log("my day",day)
    }    

    const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const monthValue : number = Number(e.target.value)
        setMonth(monthValue)
    }

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const yearValue : number = Number(e.target.value)
        setYear(yearValue)
    }

    useEffect(() => {
        console.log("my day",day)
    }, [day, month, year])

    function getInputDateValues()
    {
        console.log("SENT IN DAY", day)
        console.log("button clicked")
        const inputDayValue : number = day
        const inputMonthValue : number = month
        const inputYearValue : number = year

        return { day: inputDayValue, month: inputMonthValue, year: inputYearValue }
        
    }

    function getCurrentDate(){
        const date = new Date()

        const currentDay : number = date.getDate()
        const currentMonth : number = date.getMonth() +1
        const currentYear : number = date.getFullYear()

        return { day: currentDay, month: currentMonth, year: currentYear }

    }

    function calculateValues(inputDate: {day: number, month: number , year: number}, currentDate: {day: number, month: number, year: number}){

        let ageInYears : number = currentDate.year - inputDate.year

        if (currentDate.month < inputDate.month){
            ageInYears --

        }else if (currentDate.month >= inputDate.month && currentDate.day < inputDate.day){
            ageInYears --

        }else if (currentDate.month >= inputDate.month){
            ageInYears
        }    
        
        let ageInMonths : number = ageInYears * 12
        let ageInDays : number =  ageInYears * 365


        return {ageInYears, ageInMonths, ageInDays}
    }

    calculateValues(getInputDateValues(), getCurrentDate())

    console.log(calculateValues(getInputDateValues(), getCurrentDate()))


  return (

    <form>
        <section className="input-group">
        <label className="input-label-group">
            DAY
        <input
        className="input"
        type="number"
        name="day"
        value={day}
        onChange={handleDayChange}
        min="1"
        max="31"
        placeholder="DD"
        required
        />
        <p className="required-field-error">This field is required</p>
        <p className="required-date-error">Must be a valid day</p>
        </label>

        <label className="input-label-group">
            MONTH
        <input
        className="input"
        type="number"
        name="month"
        value={month}
        onChange={handleMonthChange}
        min="1"
        max="12"
        placeholder="MM"
        required
        />
        <p className="required-field-error">This field is required</p>
        <p className="required-date-error">Must be a valid month</p>
        </label>

        <label className="input-label-group">
            YEAR
        <input
        className="input"
        type="number"
        name="year"
        value={year}
        onChange={handleYearChange}
        min="1900"
        max="2024"
        placeholder="YYYY"
        required
        />
        <p className="required-field-error">This field is required</p>
        <p className="required-date-error">Must be in the past</p>
        </label>
        </section>
        
        <section className="submit">
            <hr className="break-line"></hr>
            <button /* onClick={getDateValues} */ className="submit-button">
                <i className="fa-solid fa-arrow-down"></i>
            </button>

        </section>
        
    </form>
  )
}

export default AgeForm