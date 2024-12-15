import React, { useState } from "react";
import { RiLayoutMasonryLine, RiPaintBrushLine  } from "react-icons/ri"
import { TbTools } from "react-icons/tb";
import { MdOutlineCleaningServices} from 'react-icons/md';
import { GiKitchenTap } from "react-icons/gi";
import { HiOutlineLightningBolt } from "react-icons/hi";
function SectionTwo() {

    const [selectedService, setSelectedService] = useState(0);

    // Liste des services
    const services = [
      {
        icon: <GiKitchenTap size={45} />,
        title: "Plomberie",
        description: "Installez ou réparez des équipements de plomberie en assurant un service rapide et professionnel.",
        details: [
          { number: 1, text: "Installation : Pose de robinets, éviers, douches et chauffe-eaux." },
          { number: 2, text: "Entretien : Débouchage de canalisations et vérification de systèmes pour prévenir les problèmes." },
          { number: 3, text: "Réparation : Détection et réparation de fuites ou remplacement de tuyauteries." },
        ],
        trends: "Économies d'eau, robinets modernes et matériaux durables.",
        image: "../../../public/plombier1.jpg", 
      },
      {
        icon: <RiPaintBrushLine size={45} />,
        title: "Peinture",
        description: "Travaux de peinture intérieure et extérieure adaptés à tous vos besoins.",
        details: [
          { number: 1, text: "Préparation : Nettoyage et ponçage des surfaces avant peinture." },
          { number: 2, text: "Application : Utilisation de peintures de haute qualité." },
          { number: 3, text: "Finition : Retouches pour un rendu impeccable." },
        ],
        trends: "Peintures écologiques et finitions mates ou brillantes.",
        image: "../../../public/peintre1.jpg", 
      },
      {
        icon: <RiLayoutMasonryLine size={45} />, // Icône de maçonnerie
        title: "Maçonnerie",
        description: "Construction et rénovation d'ouvrages en béton, briques et autres matériaux.",
        details: [
          { number: 1, text: "Fondations : Construction de fondations solides et durables." },
          { number: 2, text: "Murs : Érection de murs en briques ou en parpaings pour une structure solide." },
          { number: 3, text: "Rénovation : Réparation et restauration des bâtiments anciens." },
        ],
        trends: "Utilisation de matériaux écologiques et durables.",
        image: "../../../public//pexels-tima-miroshnichenko-6473977.jpg", 
      },
      {
        icon: < HiOutlineLightningBolt size={45} />, // Icône d'électricité
        title: "Electricité",
        description: "Installation et maintenance des systèmes électriques pour un environnement sûr et fonctionnel.",
        details: [
          { number: 1, text: "Installation : Mise en place de circuits électriques pour votre maison." },
          { number: 2, text: "Maintenance : Réparation et entretien des systèmes électriques." },
          { number: 3, text: "Sécurité : Vérification des installations pour éviter les risques électriques." },
        ],
        trends: "Domotique et systèmes électriques intelligents.",
        image: "../../../public/electricien1.jpg",
      },
      {
        icon: <TbTools size={45} />, // Icône de menuiserie
        title: "Menuiserie",
        description: "Fabrication et installation de meubles et structures en bois sur mesure.",
        details: [
          { number: 1, text: "Création : Fabrication de meubles sur mesure, portes, fenêtres, etc." },
          { number: 2, text: "Installation : Pose de menuiseries intérieures et extérieures." },
          { number: 3, text: "Rénovation : Restauration de meubles et structures en bois anciens." },
        ],
        trends: "Bois recyclé et design moderne.",
        image: "../../../public/menuisier1.jpg",
      },{
        icon: <MdOutlineCleaningServices size={45} />, // Icône de ménage
        title: "Ménage",
        description: "Service de nettoyage professionnel pour un environnement propre et sain.",
        details: [
          { number: 1, text: "Nettoyage général : Entretien des surfaces, sols et vitres." },
          { number: 2, text: "Désinfection : Désinfection des espaces pour éliminer les bactéries et virus." },
          { number: 3, text: "Nettoyage de printemps : Nettoyage en profondeur pour rafraîchir les espaces de vie." },
        ],
        trends: "Utilisation de produits écologiques et nettoyage à vapeur.",
        image: "../../../public/pexels-tima-miroshnichenko-6197122.jpg", 
      }
      
      
      
    ];

  return (
    <div className="container w-full py-12">
    <div className="flex justify-around items-center gap-4 border-b">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col items-center text-center cursor-pointer gap-2 pb-5 ${
            selectedService === index
              ? "text-primary border-b-2 border-b-primary"
              : "text-gray-700 hover:text-primary hover:border-b hover:border-b-primary"
          }`}
          onClick={() => setSelectedService(index)}
        >
          <div>{service.icon}</div>
          <span className="text-base font-semibold mt-1">{service.title}</span>
        </div>
      ))}
    </div>
  
    {/* Affichage du service sélectionné */}
    <div className="py-12">
      <div className="grid grid-flow-row grid-cols-[2fr_1.5fr] ">
        <div>
          <h1 className="text-2xl font-bold pb-8 pt-6 ">
            {services[selectedService].title}
          </h1>
          <div className="flex flex-col gap-5 text-xl font-medium">
            <p>{services[selectedService].description}</p>
            <ul className="font-medium grid grid-flow-row gap-4">
              {services[selectedService].details.map((detail, index) => (
                <li key={index} className="flex items-center gap-4">
                  <span className="flex items-center gap-3">
                    <div className="border rounded-full bg-primary h-10 w-10 text-white text-center py-1 px-3">
                      {detail.number}
                    </div>
                    <div>{detail.text}</div>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <strong>Tendance actuelle :</strong> {services[selectedService].trends}
            </p>
          </div>
        </div>
        <div className="pl-10 pt-4">
          <img
            src={services[selectedService].image}
            alt={services[selectedService].title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
  
      );
  };

export default SectionTwo;
