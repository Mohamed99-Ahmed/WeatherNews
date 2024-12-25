
import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/imgs/logo.png"
export default function NavBar() {
  return (
   <nav className="navbar navbar-expand-lg fixed-top p-2  bg-light shadow-lg bg-gradient " dir="rtl">
  <div className="container ">
    <Link className="navbar-brand d-flex gap-2  me-2 align-items-center" to="/">
      <img className="w-full " style={{height:"40px"}} src={Logo} alt="logo wether" />
      <article >
        <p className="mb-1 fw-bold">الطقس </p>
        <p className="mb-0 ">حالة الطقس اليوية</p>
      </article>
    </Link>
    <button className="navbar-toggler border-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars fs-2"></i>
    </button>
    <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  gap-lg-3 align-items-center">
        <NavLink to="/" className="nav-item text-capitaNavLinkze   text-center ">
          <li className="text-black text-decoration-none w-100" aria-current="page">الرئيسية</li>
        </NavLink>
        <NavLink to="/news" className="text-capitaNavLinkze  text-center">
          <li className="text-black text-decoration-none nav-NavLinknk w-100" >الاخبار</li>
        </NavLink>
       
      </ul>
    </div>
  </div>
</nav>

  )
}
