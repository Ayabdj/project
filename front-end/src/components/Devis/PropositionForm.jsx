import React, { useState } from "react";

const ProposezDevis = () => {
  // États pour les champs du formulaire et leurs erreurs
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [estimatedTime, setEstimatedTime] = useState(""); // Champ "Temps estimé" sans validation
  const [projectDescription, setProjectDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  // Validation du prix estimé
  const handlePriceChange = (e) => {
    const value = e.target.value;
    setEstimatedPrice(value);
    setPriceError(
      !value || isNaN(value) || Number(value) < 500
        ? "Veuillez entrer un prix valide (supérieur ou égal à 500)."
        : ""
    );
  };

  // Modification du temps estimé sans validation
  const handleTimeChange = (e) => {
    const value = e.target.value;
    setEstimatedTime(value);
  };

  // Validation de la description du projet
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setProjectDescription(value);
    setDescriptionError(!value ? "Veuillez fournir une description du projet." : "");
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = !priceError && !descriptionError && estimatedPrice && projectDescription;

    // Si tout est valide on affiche les données  ( change aprs)
    if (!isValid) {
      if (!estimatedPrice || priceError) setPriceError("Veuillez entrer un prix valide.");
      if (!projectDescription || descriptionError) setDescriptionError("Veuillez fournir une description du projet.");
      return;
    }
    console.log({ estimatedPrice, estimatedTime, projectDescription });
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center relative">
      <div className="hidden md:block h-full w-full absolute" style={{ background: "linear-gradient(130deg, #608BC1, #F3F3E0)" }}></div>

      <div className="bg-white pl-12 pr-12 mt-[135px] pt-8 mb-14 pb-14 rounded-[25px] shadow-lg  w-full sm:w-[90%] md:w-[800px] z-10">
        <p className="text-2xl sm:text-3xl font-bold text-primary mb-2 text-center">Proposition de Devis</p>
        <p className="text-[#608BC1] mb-4 text-center">Veuillez remplir ce formulaire pour envoyer votre devis aux clients.</p>
        <hr className="border-t border-gray-300 mb-6" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Prix estimé et Temps  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Prix estimé</label>
              <input
                type="text"
                value={estimatedPrice}
                onChange={handlePriceChange}
                className="inputdemande"
                placeholder="Ex: 10000 DZD"
              />
              {priceError && <p className="text-red-500 text-sm">{priceError}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Temps estimé</label>
              <input
                type="text"
                value={estimatedTime}
                onChange={handleTimeChange}
                className="inputdemande"
                placeholder="Ex: 3 jours"
              />
            </div>
          </div>

          {/* Description du projet */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description du projet</label>
            <textarea
              value={projectDescription}
              onChange={handleDescriptionChange}
              className="inputdemande"
              rows="8"
              placeholder="Décrivez votre projet"
            />
            {descriptionError && <p className="text-red-500 text-sm">{descriptionError}</p>}
          </div>

          {/* Bouton de soumission */}
          <div className="text-center">
            <button type="submit" className="w-[220px] py-2 bg-[#003366] text-white font-semibold rounded-[20px] transition-transform hover:scale-105">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProposezDevis;
