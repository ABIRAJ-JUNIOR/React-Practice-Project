import { Fragment } from "react"
import { Student } from "./components/Student"
import { ChildComponent } from "./components/ChildComponent"
// import { LearnComponent } from "./components/LearnComponent"
// import { Header } from "./components/Header"

function App() {
  return (
    <Fragment>
      {/* <div>Abiraj</div>
      <LearnComponent />
      <Header /> */}

      <Student name="Abiraj" age={22} isMarried={true} />
      <Student />

      <ChildComponent>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </ChildComponent>
    </Fragment>
  )
}

export default App
