import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";


const Mainlayout = () => {

  const [theme,setTheme]= useState('dark')
  useEffect(()=>{
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  },[])

    return (
      <ThemeContext.Provider value={{theme, setTheme}} >
                <div className={`${theme} ${theme == 'dark'?'bg-gray-900': null}`}>
            <div>
            <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#008C8C",
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