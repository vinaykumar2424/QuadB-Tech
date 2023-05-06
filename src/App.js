import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MoviePage from './components/MoviePage';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="moreinfo" element={<MoviePage />} />
          <Route path="form" element={<BookingForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
