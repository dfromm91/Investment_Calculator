export function Form({ hInit, hAnInv, hEx, hDur }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          initial investment
          <input name="initial" type="number" onChange={hInit} />
        </label>
        <label>
          annual investment
          <input name="anInvest" type="number" onChange={hAnInv} />
        </label>
      </div>

      <div className="input-group">
        <label>
          Expected Return
          <input name="exReturn" type="number" onChange={hEx} />
        </label>
        <label>
          Duration
          <input name="duration" type="number" onChange={hDur} />
        </label>
      </div>
    </div>
  );
}
