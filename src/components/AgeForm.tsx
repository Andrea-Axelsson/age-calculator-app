import { AgeFormProps } from "./types";

// The AgeForm component is responsible for rendering the form where users input their birth date.
// It uses the props defined in AgeFormProps for handling state and events.
const AgeForm : React.FC<AgeFormProps> = (props) => {
    
  return (
    <form>
        {/* Input sections for day, month, and year */}
        <section className="input-group">
            {/* Day input field */}
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
                <p className="required-date-error">{props.errorMessageDay}</p>
            </label>

            {/* Month input field */}
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
                <p className="required-date-error">{props.errorMessageMonth}</p>
            </label>

            {/* Year input field */}
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
                <p className="required-date-error">{props.errorMessageYear}</p>
            </label>
        </section>
        
        {/* Submit button with animation effect */}
        <section className="submit">
            <hr className="break-line"></hr>
            <button onClick={props.calculateValues} className={`submit-button ${props.isAnimating ? 'submit-button-animate':  ''}`}>
                <i className="fa-solid fa-arrow-down"></i>
            </button>
        </section>
        
    </form>
  )
}

export default AgeForm
