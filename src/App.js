import logo from "./logo.svg";
import "./App.css";
import { createContext, useState, useContext } from "react";
const context = createContext({ state: 40 });

//Three Steps to remember while working with Context

// react context works on pub-sub model>Which means Publisher-Subscriber Model
//   1.creating a context-(createContext)
//   2.publisher alias provider-(context.provider)
//   3.subscriber -(useContext)
//MygrandChild component before Applying theReacatcontext concept
// const MygrandChild = ({ state, setSate }) => {
//   const increment = () => {
//     setSate(state + 1);
//   };
//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//       {state}
//     </div>
//   );
// };

const MygrandChild = () => {
  const { state, setState } = useContext(context);
  console.log({ state, setState });

  const increment = () => {
    setState(state + 1);
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      {state}
    </div>
  );
};
// Before Applying React
// const MyChild = ({ state, setState }) => {
//   return (
//     <div>
//       <MygrandChild state={state} setSate={setState}></MygrandChild>
//     </div>
//   );
// };
//MyChild Commponent after Applying The Reatcontext Concept
const MyChild = ({ state, setState }) => {
  return (
    <div>
      <MygrandChild />
    </div>
  );
};

//App component before Applying Reactcontext concept
// function App() {
//   const initialState = 10;
//   const [state, setState] = useState(initialState);
//   const obj = { state: state, setState: setState };

//   return (

//       <div>
//         <MyChild state={state} setState={setState} />
//       </div>

//   );
// }

//App component after Applying Reactcontext concept
function App() {
  const initialState = 10;
  const [state, setState] = useState(initialState);
  const obj = { state: state, setState: setState };

  return (
    <context.Provider value={obj}>
      {/* Here obj may be Any Date Type */}
      <div>
        <MyChild />
      </div>
    </context.Provider>
  );
}

export default App;
