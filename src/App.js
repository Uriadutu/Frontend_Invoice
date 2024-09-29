import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
import InvoicePage from "./pages/InvoicePage";
import MassUploadPage from "./pages/MassUploadPage";





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/massupload" element={<MassUploadPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
