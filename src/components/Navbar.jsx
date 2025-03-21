/* eslint-disable no-unused-vars */
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faHouseChimney,
  faMagnifyingGlass,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const refreshPage = () => {
    window.location.href = window.location.href;
  };

  return (
    <>
      <div className="h-20 w-screen bg-gray-800 italic font-mono text-white flex justify-center text-2xl">
        <div className="w-[495px] flex items-center justify-center gap-3">
          <h2 className="text-5xl font-semibold">IMS</h2>
          <img
            className="h-14 w-14 object-contain"
            src="src\components\IMS_Home.png"
            alt=""
          />
        </div>

        <div className="flex justify-center items-center bg-pink-600 pr-16 w-[1500px]">
          <Link className="text-lg ml-20 italic" to="/">
            Home <FontAwesomeIcon className="text-xl" icon={faHouseChimney} />
          </Link>
          <Link className="text-lg ml-20 italic" to="/Products">
            Products
          </Link>
          <Link className="text-lg ml-20 italic" to="/NewProduct">
            Add Product <FontAwesomeIcon icon={faPlus} />
          </Link>
          <Link className="text-lg ml-20 italic" to="/Remove/:">
            Remove Product{" "}
            <FontAwesomeIcon className="text-xl" icon={faTrash} />
          </Link>
          <Link className="text-lg ml-20 italic" to="/Search">
            Search{" "}
            <FontAwesomeIcon className="text-xl" icon={faMagnifyingGlass} />{" "}
          </Link>
          <button onClick={refreshPage} className="bg-transparent text-md font-serif fixed right-2">
            <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
