import AgeForm from "./components/AgeForm"
import AgeResult from "./components/AgeResult"
import React, { useState } from 'react';

const App = () => {

  const [day, setDay] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)
  const [year, setYear] = useState<number>(0)
  const [calculatedValues, setCalculatedValues] = useState<{ageInYears: number, ageInMonths: number, ageInDays: number}>({ageInYears: 0, ageInMonths: 0, ageInDays: 0})

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

  function getInputDateValues()
  {
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

  function calculateValues(e: React.FormEvent, inputDate: {day: number, month: number , year: number}, currentDate: {day: number, month: number, year: number}){
    console.log("BUtton clicked")

    e.preventDefault()
      let ageInYears : number = currentDate.year - inputDate.year

      if (currentDate.month < inputDate.month || 
        (currentDate.month === inputDate.month && currentDate.day < inputDate.day)){
          ageInYears --
        }
      
      let ageInMonths : number = ageInYears * 12
      let ageInDays : number =  ageInYears * 365

      setCalculatedValues({ageInYears, ageInMonths, ageInDays})  
      return {ageInYears, ageInMonths, ageInDays}
  }


  return (
    <main className="container">
    <AgeForm
    day={day}
    month={month}
    year={year}
    handleDayChange={handleDayChange}
    handleMonthChange={handleMonthChange}
    handleYearChange={handleYearChange}
    calculateValues={(e) => calculateValues(e,getInputDateValues(), getCurrentDate())}
    />
    <AgeResult
    myProp={calculatedValues}
    />
    </main>
  )
}

export default App
