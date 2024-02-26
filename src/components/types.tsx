// AgeResultProps: Type definition for properties expected by the AgeResult component.
// This component is responsible for displaying the calculated age.

type AgeResultProps = {
    myProp: {
      ageInYears: number;
      ageInMonths: number;
      ageInDays: number;
    }
  }

// AgeFormProps: Type definition for properties expected by the AgeForm component.
// This component is responsible for taking user input and calculating the age.

  type AgeFormProps = {
    errorMessageYear: string,
    errorMessageDay: string,
    errorMessageMonth: string,
    isAnimating: boolean,
    day: number,
    month: number,
    year: number,
    handleDayChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleMonthChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    calculateValues: (e: React.FormEvent) => {ageInYears: number, ageInMonths: number, ageInDays: number}
  }

  export type {AgeResultProps, AgeFormProps}
    