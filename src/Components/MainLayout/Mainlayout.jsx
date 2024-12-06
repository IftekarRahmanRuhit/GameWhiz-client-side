import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";


const Mainlayout = () => {

  const [theme,setTheme]= useState('light')

    return (
      <ThemeContext.Provider value={{theme, setTheme}} >
                <div className={`${theme} ${theme == 'dark'?'bg-black': null}`}>
            <div>
            <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              color: "red",
            },
          },
        }}
      />
                <Navbar></Navbar>
            </div>
            <div  className="min-h-[calc(100vh-401px)]">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
      </ThemeContext.Provider>

    );
};

export default Mainlayout;