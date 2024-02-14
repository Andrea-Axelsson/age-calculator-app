import AgeForm from "./components/AgeForm"
import AgeResult from "./components/AgeResult"

const App = () => {
  return (
    <main className="container">
    <AgeForm/>
    <AgeResult/>
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