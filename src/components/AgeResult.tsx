interface AgeResultProps {
    myProp: {
      ageInYears: number;
      ageInMonths: number;
      ageInDays: number;
    }
    isVisible: boolean;
  }
    
  const AgeResult: React.FC<AgeResultProps> = ({ myProp, isVisible }) => {
    if (!isVisible) {
      return null;
    }
          return (
            <section className="age-result-container">
              <article className="text-container">
                <h1 className="age-number">--{myProp.ageInYears}</h1>
                <h1 className="age-date">years</h1>
              </article>
              <article className="text-container">
                <h1 className="age-number">--{myProp.ageInMonths}</h1>
                <h1 className="age-date">months</h1>
              </article>
              <article className="text-container">
                <h1 className="age-number">--{myProp.ageInDays}</h1>
                <h1 className="age-date">days</h1>
              </article>
            </section>
          );
        }
        
  
  export default AgeResult