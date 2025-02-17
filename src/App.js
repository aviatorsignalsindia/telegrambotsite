import React from "react";
import "./App.css"; // Убедитесь, что файл App.css существует в папке src
import ProductList from "../components/ProductList"; // Правильный путь

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList />
      </header>
    </div>
  );
}

export default App;
