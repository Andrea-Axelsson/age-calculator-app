// Importing the useSpring and animated components from react-spring for animations,
// and AgeResultProps type definition from the types file.
import {useSpring, animated} from "react-spring";
import { AgeResultProps } from "./types";

// AnimatedNumber: A functional component that animates a number from 0 to its final value 'n'.
function AnimatedNumber ({n}: {n: number}){
  // The useSpring hook is used to define the animation properties for the number.
  const {number} = useSpring ({
    from: {number: 0}, // Animation starts at 0
    number: n, // Final value of the animation
    delay: 200, // Delay before the animation starts
    config: {mass: 1, tension: 20, friction: 10}, // Physics properties of the animation
  })

  // Render an animated div that displays the animated number.
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

// AgeResult: A functional component that displays the age calculation results.
const AgeResult: React.FC<AgeResultProps> = ({ myProp}) => {
  return (
    <section className="age-result-container">
      {/* Each article represents a unit of age: years, months, and days. */}
      <article className="text-container">
        {/* Animated display of age in years */}
        <h1 className="age-number">
          {myProp.ageInYears > 0 ? <AnimatedNumber n={myProp.ageInYears} />: '--'}
        </h1>
        <h1 className="age-date">years</h1>
      </article>

      <article className="text-container">
        {/* Animated display of age in months */}
        <h1 className="age-number">
        {myProp.ageInMonths > 0 ? <AnimatedNumber n={myProp.ageInMonths} />: '--'}
        </h1>
        <h1 className="age-date">months</h1>
      </article>

      <article className="text-container">
        {/* Animated display of age in days */}
        <h1 className="age-number">
          {myProp.ageInDays > 0 ? <AnimatedNumber n={myProp.ageInDays} />: '--'}
        </h1>
        <h1 className="age-date">days</h1>
      </article>
    </section>
  )
}

export default AgeResult
