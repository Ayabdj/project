import React, { useState } from "react";
import Select from "react-select";
import { IoSearchOutline, IoLocationOutline } from "react-icons/io5";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import ReactSlider from "react-slider";
import { PiCurrencyDollarLight } from "react-icons/pi"

function AdvancedSearch() {
  const minPrice = 500;
  const maxPrice = 50000;
  const [isShown, setIsShown] = useState(false);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const wilayas = [
    // Liste des wilayas
    "Adrar",
    "Ain Defla",
    "Aïn Témouchent",
    "Alger",
    "Batna",
    "Béchar",
    "Béjaïa",
    "Biskra",
    "Blida",
    "Bordj Badji Mokhtar",
    "Bordj Bou Arréridj",
    "Bouira",
    "Djanet",
    "Djelfa",
    "El Bayadh",
    "El Menia",
    "El Oued",
    "El Tarf",
    "Ghardaia",
    "Guelma",
    "Illizi",
    "In Guezzam",
    "In Salah",
    "Jijel",
    "Khenchela",
    "Laghouat",
    "Mascara",
    "Médéa",
    "Mila",
    "Mostaganem",
    "M'Sila",
    "Naama",
    "Ouargla",
    "Oran",
    "Oum El Bouaghi",
    "Relizane",
    "Sétif",
    "Skikda",
    "Souk Ahras",
    "Souk Abrahm",
    "Tamanghasset",
    "Tébessa",
    "Tiemimoun",
    "Tindouf",
    "Tipasa",
    "Tissemsilt",
    "Tlemcen",
    "Touggourt",
  ];

  const artisanTypes = [
    "Plomberie",
    "Peinture",
    "Maçonnerie",
    "Electricité",
    "Menuiserie",
    "Ménage",
  ];

  const wilayaOptions = wilayas.map((wilaya) => ({
    value: wilaya,
    label: wilaya,
  }));

  const TypeOptions = artisanTypes.map((p) => ({
    value: p,
    label: p,
  }));

  const [selectedWilaya, setSelectedWilaya] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [artisanSearch, setArtisanSearch] = useState("");

  const customStyles = {
    control: () => ({
      display: "flex",
      border: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "#6D6D6D",
      backgroundColor: state.isSelected ? "#0051CB" : "white",
      opacity: state.isFocused ? "0.6" : "1",
    }),
  };

  return (
    <div className="container relative z-40 top-[-250px] md:top-[-110px] left-[36px]">
      <div className=" md:h-20 border border-gray-200 rounded-2xl md:rounded-full grid grid-cols-2 md:grid-cols-5 gap-4 md:flex md:items-center md:justify-between md:gap-2  px-12 py-14 absolute bg-white text-sm lg:text-base left-0">
        {/* Localisation */}
        <div className="flex flex-col justify-between relative gap-2">
          <IoLocationOutline className="text-xl absolute left-0 top-1" />
          <span className="pl-6 font-semibold">Location</span>
          <Select
            classNamePrefix="react-select"
            value={selectedWilaya}
            onChange={(selectedOption) => setSelectedWilaya(selectedOption)}
            options={wilayaOptions}
            placeholder="Sélectionnez la location"
            className="md:w-[150px] lg:w-[205px] text-xs lg:text-sm"
            styles={customStyles}
          />
        </div>

        {/* Service */}
        <div className="flex flex-col justify-between relative gap-2">
          <HiOutlineWrenchScrewdriver className="text-xl absolute left-0 top-1" />
          <span className="pl-7 font-semibold">Service</span>
          <Select
            classNamePrefix="react-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e)}
            options={TypeOptions}
            placeholder="Sélectionnez un service"
            className="md:w-[150px] lg:w-[200px] text-xs lg:text-sm"
            styles={customStyles}
          />
        </div>

        {/* Filtre de prix */}
        <div className="relative flex flex-col justify-between">
          <div onClick={() => setIsShown(!isShown)} className="cursor-pointer flex flex-col justify-between gap-2">
          <PiCurrencyDollarLight className="text-xl absolute left-[-8px] top-1"/>
            <span className="pl-4">Price Range</span>
            <p className="text-xs lg:text-sm h-[38px] md:w-[180px] flex justify-center items-center pl-2 text-nowrap">
              <span className="linline-block text-[#777777] mr-1 lg:mr-2">
                Min: {priceRange[0]} DA
              </span>
              <span className="inline-block text-[#777777]">
                Max: {priceRange[1]} DA
              </span>
            </p>
          </div>
          <div
            className={`absolute bottom-[-70px] z-30 lg:bottom-[-80px] w-[200%] md:w-[300px] lg:w-[400px] px-4 lg:px-6 py-2 lg:py-3 h-16 lg:h-20 border-gray-300 dark:border-gray-600 border bg-white dark:bg-darkmode rounded-full ${
              !isShown && `opacity-0`
            } transition-opacity duration-150`}
          >
            <h3 className=" max-md:text-xs">Select a price range</h3>
            <ReactSlider
              className="w-full h-full flex justify-center items-center translate-y-[-10px]"
              value={priceRange}
              min={minPrice}
              max={maxPrice}
              onChange={setPriceRange}
              trackClassName="bg-primary h-2 lg:h-3 rounded-full"
              minDistance={0}
              thumbClassName="h-4 w-4 lg:h-5 lg:w-5 outline-none bg-white text-center text-sm cursor-pointer  border-[2px] border-primary rounded-full"
            />
          </div>
        </div>

        {/* Recherche */}
        <div className="flex flex-col justify-between relative gap-2 col-span-2 md:col-span-1">
          <input
            type="text"
            value={artisanSearch}
            onChange={(e) => setArtisanSearch(e.target.value)}
            placeholder="Rechercher un artisan"
            className="w-full md:w-[250px] lg:w-[300px] border border-gray-300 rounded-full px-4 py-2 text-sm"
          />
        </div>

        {/* Bouton Recherche */}
        <div className="flex justify-center items-center col-span-2 md:col-span-1">
          <button className="text-white h-[50px] w-[50px] bg-primary rounded-full flex justify-center items-center">
            <IoSearchOutline size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvancedSearch;
