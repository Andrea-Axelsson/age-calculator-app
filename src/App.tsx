import AgeForm from "./components/AgeForm"
import AgeResult from "./components/AgeResult"
import React, { useState } from 'react';

const App = () => {
  // State variables for day, month, year, and calculated age values
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [calculatedValues, setCalculatedValues] = useState<{ageInYears: number, ageInMonths: number, ageInDays: number}>({ageInYears: 0, ageInMonths: 0, ageInDays: 0});
  const [errorMessageDay, seterrorMessageDay] = useState <string>("")
  const [errorMessageMonth, seterrorMessageMonth] = useState <string>("")
  const [errorMessageYear, seterrorMessageYear] = useState <string>("")

  // Event handlers for input changes
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const dayValue : number = Number(e.target.value);

      if (dayValue < 1 || dayValue > 31){
        seterrorMessageDay("Must be a valid day")
      }else{
        seterrorMessageDay("")
      }

      setDay(dayValue);
  }    

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const monthValue : number = Number(e.target.value);

      if (monthValue < 1 || monthValue > 12){
        seterrorMessageMonth("Must be a valid month")
      }else{
        seterrorMessageMonth("")
      }

      setMonth(monthValue);
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const yearValue : number = Number(e.target.value);
      if (yearValue < 1900 || yearValue > 2024){
        seterrorMessageYear("Must be in the past")
      }else{
        seterrorMessageYear("")
      }
      setYear(yearValue);
  }

  // Function to get input date values
  function getInputDateValues() {
      const inputDayValue : number = day;
      const inputMonthValue : number = month;
      const inputYearValue : number = year;

      return { day: inputDayValue, month: inputMonthValue, year: inputYearValue };
  }

  // Function to get current date values
  function getCurrentDate() {
      const date = new Date();

      const currentDay : number = date.getDate();
      const currentMonth : number = date.getMonth() + 1;
      const currentYear : number = date.getFullYear();

      return { day: currentDay, month: currentMonth, year: currentYear };
  }

  // Function to calculate age values based on input and current date
  function calculateValues(e: React.FormEvent, inputDate: {day: number, month: number , year: number}, currentDate: {day: number, month: number, year: number}) {
    e.preventDefault();
    let ageInYears : number = currentDate.year - inputDate.year;

    if (currentDate.month < inputDate.month || (currentDate.month === inputDate.month && currentDate.day < inputDate.day)) {
      ageInYears--;
    }
      
    let ageInMonths : number = ageInYears * 12;
    let ageInDays : number =  ageInYears * 365;

    setCalculatedValues({ageInYears, ageInMonths, ageInDays});  
    return {ageInYears, ageInMonths, ageInDays};
  }

  // Rendering AgeForm and AgeResult components with necessary props
  return (
    <main className="container">
      <AgeForm
        errorMessageYear={errorMessageYear}
        errorMessageDay={errorMessageDay}
        errorMessageMonth={errorMessageMonth}
        day={day}
        month={month}
        year={year}
        handleDayChange={handleDayChange}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
        calculateValues={(e) => calculateValues(e, getInputDateValues(), getCurrentDate())}
      />
      <AgeResult
        myProp={calculatedValues}
      />
    </main>
  );
}

export default App; // Exporting the App component
