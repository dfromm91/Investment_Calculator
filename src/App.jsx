import Table from "./Table";
import { Form } from "./Form";
import { useState } from "react";
function App() {
  const [init, setInit] = useState(null);
  const [anInv, setAnInv] = useState(null);
  const [ex, setEx] = useState(null);
  const [dur, setDur] = useState(null);

  function handleInit(e) {
    setInit(() => e.target.value);
  }
  function handleAnInv(e) {
    setAnInv(() => e.target.value);
  }
  function handleEx(e) {
    setEx(() => e.target.value);
  }
  function handleDur(e) {
    setDur(() => e.target.value);
  }

  function dataCheck() {
    const numOrNot = [init, dur, ex, anInv];
    return numOrNot
      .map((s) => Number.isFinite(parseInt(s)))
      .reduce((acc, current) => acc && current, true);
  }

  return (
    <div>
      <h1 id="header">React Investment Calculator</h1>
      <Form
        hInit={handleInit}
        hAnInv={handleAnInv}
        hEx={handleEx}
        hDur={handleDur}
      />
      {dataCheck() && (
        <Table
          annualInvestment={anInv}
          initialInvestment={init}
          expectedReturn={ex}
          duration={dur}
        />
      )}
    </div>
  );
}

export default App;
