import { useState } from "react";
import Day11Home from "./cleanUp";
import Day11CleanupFunc from "./cleanupFunction";



const Day11App = () => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <>
      <button onClick={() => setToggleView(() => !toggleView)}>
        {toggleView ? "Hide" : "Show"} Component
      </button>
      {toggleView && <Day11CleanupFunc/>}
    </>
  )
}

export default Day11App;