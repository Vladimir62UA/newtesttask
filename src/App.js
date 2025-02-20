import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./TopMenu";
import NavigationMenu from "./NavigationMenu";
import Orders_1 from "./Orders_1";
import Products from "./Products";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="d-flex flex-row bg-bg-light text-center">
          <div className="col-12">
            <TopMenu className="bord_2" />
          </div>
        </header>

        {/* Основная часть */}
        <div className="row mt-3">
          {/* Левый блок (4 колонки) */}
          <aside className="d-flex flex-column col-md-2 bg-body-secondary p-3  right_border">
            <NavigationMenu />
          </aside>

          {/* Правый блок (8 колонок) - Контент меняется динамически */}
          <section className="col-md-10 bg-secondary text-white p-3">
            <Routes>
              <Route path="/orders_1" element={<Orders_1 />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;