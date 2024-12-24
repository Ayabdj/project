import React, { useState } from "react";
import logo from "/src/assets/logo.png";
import instaCode from "/public/insta_code.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [opinion, setOpinion] = useState("");

  const handleSend = () => {
    if (opinion.trim()) {
      console.log("Message envoyé :", opinion);
      setOpinion(""); // Réinitialiser après envoi
    } else {
      alert("Veuillez écrire un message.");
    }
  };

  return (
    <footer className="bg-[#608BC1] py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Section Logo et QR Code */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <a href="/" className="flex justify-center mt-[7px] mb-[10px]">
              <img src={logo} alt="Logo de DZ-Artisan" className="w-28" />
            </a>
            <img src={instaCode} alt="Code QR pour Instagram" className="w-28" />
            <div className="text-center md:text-left">
              
              <div className="flex gap-4 justify-center md:justify-start mt-[60px]">
              <p className="text-black font-bold text-lg mb-3">Suivez nous sur</p>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003366]"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003366]"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003366]"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            <p className="font-semibold text-black text-lg">Menu</p>
            <ul className="flex flex-col gap-8">
              <li>
                <a
                  href="/"
                  className="text-base font-semibold text-black hover:text-[#003366] transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-base font-semibold text-black hover:text-[#003366] transition-colors"
                >
                  Nos services
                </a>
              </li>
            </ul>
          </div>

          {/* Contactez-nous Section */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            <p className="font-semibold text-black text-lg">Contactez nous</p>
            <ul className="flex flex-col gap-8">
              <li className="flex items-center justify-center md:justify-start gap-3 text-base font-semibold text-black">
                <FiPhone className="text-lg" />
                05 55 55 55 55
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-base font-semibold text-black">
                <MdOutlineMailOutline className="text-lg" />
                Dz-artisan@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-base font-semibold text-black">
                <LuMapPin className="text-lg" />
                Amizour, Béjaia
              </li>
            </ul>
          </div>

          {/* Opinion Section */}
          <div className="flex flex-col  gap-8">
            <p className="font-semibold text-black text-center md:text-left">
              Votre opinion sur DZ-Artisan !
            </p>
            <div className="h-[150px] w-[220px] bg-[#F7F7F7] rounded-lg shadow-lg shadow-[#6D6D6D]">
              <textarea
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
                placeholder="Votre message."
                className="w-full h-full text-sm text-[#6D6D6D] border-transparent outline-none p-4 bg-[#CBDCEB] rounded-md"
              />
            </div>
            <button
              type="button"
              onClick={handleSend}
              className="w-[220px] py-2 bg-[#003366] text-white font-semibold rounded-[20px] transition-transform hover:scale-105"
            >
              Envoyer le message
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
