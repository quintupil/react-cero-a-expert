//46. Evento Click (Eventos en general)
import PropTypes from "prop-types";

function handleAdd(event) {
  console.log(event);
}

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      {/*code01: 
      <button 
        onClick={function (event) {
          console.log(event);
        }}
      >
       +1
      </button>
      */}

      {/*code02: 
      <button 
        onClick={(event) => {
          handleAdd(event);
        }}
      >
        +1
      </button>
      */}

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number.isRequired,
};
