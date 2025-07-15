import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  //step1:useState for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //step2:set className based on state

  const appClass = isDarkMode ? "App dark" : "App light"

//step3:Toggle function 
 function handleClick() {
    setIsDarkMode((prev) => !prev);
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
