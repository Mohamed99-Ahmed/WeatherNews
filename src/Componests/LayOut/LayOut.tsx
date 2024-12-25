import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { ReactNode } from 'react';

export default function LayOut():ReactNode{
  return (
    <>
       {/*the structure of the Layout website  */}
         <NavBar/>
          <div className="  d-flex flex-column justify-content-between"style={{marginTop:"90px",minHeight:"80vh"}}>
            <main className="main-sec flex-grow-1"><Outlet></Outlet></main>
          <Footer/>
          </div>

    </>
  )
}
