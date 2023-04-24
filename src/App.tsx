import { BrowserRouter } from "react-router-dom";
import HeaderCom from "./layout/Header";
import PageCom from "./pages/PageCom";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderCom />
        <PageCom />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
