import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <main className="py-3">
            <Container>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/product/:id" element={<ProductScreen />} />
                <Route path="/cart" element={<CartScreen />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </Router>
      </Provider>
    </>
  );
};

export default App;
