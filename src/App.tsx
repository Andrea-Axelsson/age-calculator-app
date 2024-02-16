import AgeForm from "./components/AgeForm"
import AgeResult from "./components/AgeResult"
import React, { useState, useEffect } from 'react';

const App = () => {

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
    <main className="container">
    <AgeForm
    day={day}
    month={month}
    year={year}
    handleDayChange={handleDayChange}
    handleMonthChange={handleMonthChange}
    handleYearChange={handleYearChange}
    />
    <AgeResult
    calculateValues={() => calculateValues(getInputDateValues(), getCurrentDate())}
    />
    </main>
  )
}

export default App


/* 

1:

-Man skall skriva in sitt fördelsedatum i inputen.

-Klicka på knappen som tar in alla värden. (3 värden/variabler)
  -Eventlistener på knappen
  -En funktion koppplad till eventlistener
  -Logga ut värderna jag får

-Skapa en funktion som kalkylera hur många år, månader och dagar man är. (3 nummer variabler)

-Dessa variabler kan sedan passeras in i JSX genom ${}.


2:

-Error meddelanden om man angivit fel datum.
-Man kan bara skriva in X-antal siffror i vardera input.

Jag har 2 två funktioner, 
-En med input values
-En med current dates

båda retunerar objekt med värden som jag vill calkylera i en annan funtion.

Tredje kalkyl funktionen
-Hur får jag in mina värden där? (Parametrar)
-Hur och när kallar jag på argumenten, de faktiska funktionerna som inehåller mina objekt?
-Vid ett knapptryck?

*/