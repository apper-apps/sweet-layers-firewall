import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Homepage from "@/components/pages/Homepage";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Future implementation for search functionality
  };

  const handleCategorySelect = (category) => {
    console.log("Selected category:", category);
    // Future implementation for category filtering
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ivory flex flex-col">
        <Header 
          cartCount={cartCount}
          onSearch={handleSearch}
          onCategorySelect={handleCategorySelect}
        />
        
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <Homepage 
                  onSearch={handleSearch}
                  onCategorySelect={handleCategorySelect}
                />
              } 
            />
          </Routes>
        </main>

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;