import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [quote, setQuote] = useState([]);
  // State til sorteringskriterie (titel, pris og rating)
  const [sortBy, setSortBy] = useState("");

  // State til søgefeltets værdi
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
