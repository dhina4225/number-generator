import React from "react";
import "./index.css";

const data = [];



// prime number function
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};




for(let i=0;i<=31;i++){

  // even number 
  if(i % 2 === 0){
    data.push({val:i, color:'green'});
    
    // prime number
  }else if(isPrime(i)){
 data.push({ val: i, color: 'blue' });
//  odd number
    } else{
      data.push({val:i,color:'yellow'})
    }
  };


const App = () => {
  return (
    <div className="main">
      <div>
        <h1 className="title">Number Generator</h1>
      </div>
      <div className="box-container">
        {data.map((val, index) => {
          return (
            <div className="box" style={{ backgroundColor: val.color }}>
              <h1>{index}</h1>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

// const Boxes = () => {
//   return (
//     <div className="boxes">
//       {data.map((val, index) => {
//         return <Box {...val} index={index} key={index} />;
//       })}
//     </div>
//   );
// };

// const Box = ({ val, index }) => {
//   return (
//     <div className="box-container" style={{backgroundColor:val.color}}>
//       <p className="box">{index}</p>
//     </div>
//   );
// };

export default App;
