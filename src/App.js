import "./App.css";
import Form from "./Form.js";
import Mainsection from "./Mainsection.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>The Weather Outside is Weather</h1>
        <Form />
        <br />
        <Mainsection />
        <br />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
