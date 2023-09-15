import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        const modifiedSushis = sushis.map((sushi) => {
          return { ...sushi, isEaten: false };
        });
        setSushis(modifiedSushis);
      });
  }, []);
  function handleEatSushi(eatenSushi) {
    const remainder = wallet - eatenSushi.price;
    if (remainder >= 0) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return { ...sushi, isEaten: true };
        } else {
          return sushi;
        }
      });
      setSushis(updatedSushis);
      setWallet(remainder)
    } else { alert("You don't have enough money for sushi")
    }
  }

  function handleAddmoney(amount){
   setWallet(wallet => wallet + amount) 
  }

  console.log(sushis);

  const emptyPlates = sushis.filter((sushi) => sushi.isEaten);
  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} />
      <Table onAddmoney={handleAddmoney} plates={emptyPlates} wallet={wallet} />
    </div>
  );
}

export default App;
