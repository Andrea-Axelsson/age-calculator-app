import {useSpring, animated} from "react-spring"

function AnimatedNumber ({n}: {n: number}){
  const {number} = useSpring ({
    from: {number: 0},
    number: n,
    delay: 200,
    config: {mass: 1, tension: 20, friction: 10},
  })

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>

}

type AgeResultProps = {
    myProp: {
      ageInYears: number;
      ageInMonths: number;
      ageInDays: number;
    }
  }
    
  const AgeResult: React.FC<AgeResultProps> = ({ myProp}) => {
          return (
            <section className="age-result-container">
              <article className="text-container">
                <h1 className="age-number">
                  {myProp.ageInYears > 0 ? <AnimatedNumber n={myProp.ageInYears} />: '--'}
                </h1>
                <h1 className="age-date">years</h1>
              </article>
              <article className="text-container">
                <h1 className="age-number">
                {myProp.ageInMonths > 0 ? <AnimatedNumber n={myProp.ageInMonths} />: '--'}
                </h1>
                <h1 className="age-date">months</h1>
              </article>
              <article className="text-container">
                <h1 className="age-number">
                  {myProp.ageInDays > 0 ? <AnimatedNumber n={myProp.ageInDays} />: '--'}
                </h1>
                <h1 className="age-date">days</h1>
              </article>
            </section>
          )
        }
        
  
  export default AgeResult