type AgeResultProps = {
    calculateValues: () => {
      ageInYears: number,
      ageInMonths: number,
      ageInDays: number,
    }
  }
  
  

    const AgeResult: React.FC<AgeResultProps> = (props) => {
        const { ageInYears, ageInMonths, ageInDays } = props.calculateValues();
      
        return (
          <section className="age-result-container">
            <article className="text-container">
              <h1 className="age-number">{ageInYears}</h1>
              <h1 className="age-date">years</h1>
            </article>
            <article className="text-container">
              <h1 className="age-number">{ageInMonths}</h1>
              <h1 className="age-date">months</h1>
            </article>
            <article className="text-container">
              <h1 className="age-number">{ageInDays}</h1>
              <h1 className="age-date">days</h1>
            </article>
          </section>
        );
      }
      

export default AgeResult