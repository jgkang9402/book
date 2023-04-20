import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import HeaderCom from "./layout/Header";
import PageCom from "./pages/PageCom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderCom />
        <PageCom />
      </div>
    </BrowserRouter>
  );
}

export default App;
