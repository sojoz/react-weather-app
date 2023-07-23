import "./App.css";
import Form from "./Form.js";
import Footer from "./Footer.js";

export default function App() {
  const defaultCity = "New York";
  return (
    <div className="App">
      <div className="container">
        <Form defaultCity={defaultCity} />
        <br />
      </div>
      <Footer />
    </div>
  );
}
