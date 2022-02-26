//Styles
import "./assets/css/app.css"

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

//Router
import Router from "./router/Router";
import Navbar from "./components/Navbar";

//Views

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar/>
          <Router />
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
