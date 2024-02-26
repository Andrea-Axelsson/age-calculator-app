// Importing necessary components and hooks from React and other files
import AgeForm from "./components/AgeForm";
import AgeResult from "./components/AgeResult";
import React, { useState } from 'react';

// Defining the main component 'App'
const App = () => {
  // useState hooks to manage state of the app
  const [day, setDay] = useState<number>(0); // State for day input
  const [month, setMonth] = useState<number>(0); // State for month input
  const [year, setYear] = useState<number>(0); // State for year input
  // State for storing calculated age values
  const [calculatedValues, setCalculatedValues] = useState<{ageInYears: number, ageInMonths: number, ageInDays: number}>({ageInYears: 0, ageInMonths: 0, ageInDays: 0});
  // State for error messages
  const [errorMessageDay, seterrorMessageDay] = useState<string>("");
  const [errorMessageMonth, seterrorMessageMonth] = useState<string>("");
  const [errorMessageYear, seterrorMessageYear] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // State for animation control

  // Handlers for changes in day, month, and year input fields
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const dayValue: number = Number(e.target.value);
      // Validation for day input
      if (dayValue === 0 || dayValue < 1 || dayValue > 31){
        seterrorMessageDay("Must be a valid day");
      } else {
        seterrorMessageDay("");
      }
      setDay(dayValue);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const monthValue: number = Number(e.target.value);
      // Validation for month input
      if (monthValue === 0 || monthValue < 1 || monthValue > 12){
        seterrorMessageMonth("Must be a valid month");
      } else {
        seterrorMessageMonth("");
      }
      setMonth(monthValue);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const yearValue: number = Number(e.target.value);
      // Validation for year input
      if (yearValue === 0 || yearValue < 1900 || yearValue > 2024){
        seterrorMessageYear("Must be between 1900 and 2024");
      } else {
        seterrorMessageYear("");
      }
      setYear(yearValue);
  };

  // Function to get the current input date values
  function getInputDateValues() {
      return { day, month, year };
  }

  // Function to get the current system date
  function getCurrentDate() {
      const date = new Date();
      return { 
        day: date.getDate(), 
        month: date.getMonth() + 1, // Adding 1 because getMonth() returns 0-11
        year: date.getFullYear() 
      };
  }

  // Function to calculate age based on input date and current date
  function calculateValues(e: React.FormEvent, inputDate: {day: number, month: number, year: number}, currentDate: {day: number, month: number, year: number}) {
    e.preventDefault();
    setIsAnimating(true); // Start animation
    setTimeout(() => setIsAnimating(false), 800); // Stop animation after 800ms

    // Validate the input date
    if (inputDate.day === 0 || inputDate.month === 0 || inputDate.year === 0 || errorMessageDay || errorMessageMonth || errorMessageYear) {
      console.log("Invalid input or empty fields, calculation aborted.");
      return { ageInYears: 0, ageInMonths: 0, ageInDays: 0 };
    }

    // Calculate age in years, months, and days
    let ageInYears: number = currentDate.year - inputDate.year;
    if (currentDate.month < inputDate.month || (currentDate.month === inputDate.month && currentDate.day < inputDate.day)) {
      ageInYears--;
    }
    let ageInMonths: number = ageInYears * 12;
    let ageInDays: number = ageInYears * 365;

    // Update state with calculated values
    setCalculatedValues({ageInYears, ageInMonths, ageInDays});
    return {ageInYears, ageInMonths, ageInDays};
  }

  // Rendering the component
  return (
    <main className="container">
      <AgeForm
        errorMessageYear={errorMessageYear}
        errorMessageDay={errorMessageDay}
        errorMessageMonth={errorMessageMonth}
        day={day}
        month={month}
        year={year}
        isAnimating={isAnimating}
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
};

// Exporting the App component for use in other parts of the application
export default App;