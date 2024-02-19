type AgeFormProps = {
    errorMessageYear: string,
    errorMessageDay: string,
    errorMessageMonth: string,
    day: number,
    month: number,
    year: number,
    handleDayChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleMonthChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    calculateValues: (e: React.FormEvent) => {ageInYears: number, ageInMonths: number, ageInDays: number}
  }

  

const AgeForm : React.FC<AgeFormProps> = (props) => {
    
  return (
    <form>
        <section className="input-group">
        <label className="input-label-group">
            DAY
        <input
        className="input"
        type="number"
        name="day"
        value={props.day}
        onChange={props.handleDayChange}
        min="1"
        max="31"
        placeholder="DD"
        required
        />
        <p className="required-field-error">This field is required</p>
        <p className="required-date-error">{props.errorMessageDay}</p>
        </label>

        <label className="input-label-group">
            MONTH
        <input
        className="input"
        type="number"
        name="month"
        value={props.month}
        onChange={props.handleMonthChange}
        min="1"
        max="12"
        placeholder="MM"
        required
        />
        <p className="required-field-error">This field is required</p>
        <p className="required-date-error">{props.errorMessageMonth}</p>
        </label>

        <label className="input-label-group">
            YEAR
        <input
        className="input"
        type="number"
        name="year"
        value={props.year}
        onChange={props.handleYearChange}
        min="1900"
        max="2024"
        placeholder="YYYY"
        required
        />
        <p className="required-field-error">This field is required</p>
        <p className="required-date-error">{props.errorMessageYear}</p>
        </label>
        </section>
        
        <section className="submit">
            <hr className="break-line"></hr>
            <button onClick={props.calculateValues} className="submit-button">
                <i className="fa-solid fa-arrow-down"></i>
            </button>

        </section>
        
    </form>
  )
}

export default AgeForm
