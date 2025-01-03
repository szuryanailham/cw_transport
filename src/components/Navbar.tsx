import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-neutral text-neutral-content px-3 fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="text-slate-800 mb-3">Home</a>
              </li>
              <li>
                <a className="text-slate-800 mb-3">Unit</a>
              </li>
              <li>
                <a className="text-slate-800 mb-3">Paket Wisata</a>
              </li>
              <li>
                <a className="text-slate-800 mb-3">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CW Transport</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-bold">Home</a>
            </li>
            <li className="font-bold">
              <a>Unit</a>
            </li>
            <li className="font-bold">
              <a>Paket Wisata</a>
            </li>
            <li className="font-bold">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://wa.me/628562711149?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20sewa%20rental%20mobil%20dan%20paket%20wisata%20di%20CW%20Transport.%20Bisa%20saya%20mendapatkan%20informasi%20lebih%20lanjut%20mengenai%20pilihan%20unit%20yang%20tersedia%20serta%20paket%20wisata%20yang%20ditawarkan%3F%20Terima%20kasih."
            className="btn btn-success flex items-center text-white space-x-2 lg:space-x-1"
          >
            <FaWhatsapp className="text-lg lg:text-base" />
            <span className="hidden lg:inline">Contact Us</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
