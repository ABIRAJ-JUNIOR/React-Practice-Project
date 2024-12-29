import { Fragment } from "react"
import { Student } from "./components/Student"
// import { LearnComponent } from "./components/LearnComponent"
// import { Header } from "./components/Header"

function App() {
  return (
    <Fragment>
      {/* <div>Abiraj</div>
      <LearnComponent />
      <Header /> */}

      <Student name="Abiraj" age={22} isMarried={true} />
    </Fragment>
  )
}

export default App
