import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [progress, setProgress] = useState(0);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log("Selected Country:", event.target.value);
  };

  return (
    <>
      <div className="">
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="us">US</option>
          <option value="in">IN</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <Router>
        <div>
          <Navbar />
          <LoadingBar color="#f11946" height={3} progress={progress} />
          <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <News
                      setProgress={setProgress}
                      key={`general, ${selectedCountry}`}
                      category="general"
                      pageSize={8}
                      country={selectedCountry}
                    />
                  }
                />
                <Route
                  exact
                  path="/business"
                  element={
                    <News
                      setProgress={setProgress}
                      key={`business, ${selectedCountry}`}
                      category="business"
                      pageSize={8}
                      country={selectedCountry}
                    />
                  }
                />
                <Route
                  exact
                  path="/entertainment"
                  element={
                    <News
                      setProgress={setProgress}
                      key={`entertainment, ${selectedCountry}`}
                      category="entertainment"
                      pageSize={8}
                      country={selectedCountry}
                    />
                  }
                />
                <Route
                  exact
                  path="/health"
                  element={
                    <News
                      setProgress={setProgress}
                      key={`health, ${selectedCountry}`}
                      category="health"
                      pageSize={8}
                      country={selectedCountry}
                    />
                  }
                />
                <Route
                  exact
                  path="/science"
                  element={
                    <News
                      setProgress={setProgress}
                      key={`science, ${selectedCountry}`}
                      category="science"
                      pageSize={8}
                      country={selectedCountry}
                    />
                  }
                />
                <Route
                  exact
                  path="/sports"
                  element={
                    <News
                      setProgress={setProgress}
                      key={`sports, ${selectedCountry}`}
                      category="sports"
                      pageSize={8}
                      country={selectedCountry}
                    />
                  }
                />
                <Route
                  exact
                  path="/technology"
                  element={
                    <News
                      setProgress={setProgress}
                      key={`technology, ${selectedCountry}`}
                      category="technology"
                      pageSize={8}
                      country={selectedCountry}
                    />
                  }
                />
              </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

