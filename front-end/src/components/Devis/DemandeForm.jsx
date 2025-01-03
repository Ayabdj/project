import React, { useState } from "react";
import Select from "react-select";

const DemandeDevis = () => {
  // Liste des wilayas (régions) pour la sélection dans le formulaire
  const wilayas = [
    "Adrar", "Ain Defla", "Aïn Témouchent", "Alger", "Batna", "Béjaïa", "Biskra",
    "Blida", "Bordj Badji Mokhtar", "Bordj Bou Arréridj", "Bouira", "Djanet",
    "Djelfa", "El Bayadh", "El Menia", "El Oued", "El Tarf", "Ghardaia", "Guelma",
    "Illizi", "In Guezzam", "In Salah", "Jijel", "Khenchela", "Laghouat", "Mascara",
    "Médéa", "Mila", "Mostaganem", "M'Sila", "Naama", "Ouargla", "Oran", "Oum El Bouaghi",
    "Relizane", "Sétif", "Skikda", "Souk Ahras", "Souk Abrahm", "Tamanghasset", "Tébessa",
    "Tiemimoun", "Tindouf", "Tipasa", "Tissemsilt", "Tlemcen", "Touggourt"
  ];

  // Liste des types de services disponibles
  const artisanTypes = ["Plomberie", "Peinture", "Maçonnerie", "Electricité", "Menuiserie", "Ménage"];

  // Transformation des listes pour qu'elles soient compatibles avec react-select
  const wilayaOptions = wilayas.map(wilaya => ({ value: wilaya, label: wilaya }));
  const typeOptions = artisanTypes.map(type => ({ value: type, label: type }));

  // État pour stocker les valeurs du formulaire
  const [selectedWilaya, setSelectedWilaya] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [maxCost, setMaxCost] = useState("");
  const [costError, setCostError] = useState("");
  const [deadline, setDeadline] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  // Fonction pour gérer les changements du numéro de téléphone
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    // Vérification du format du numéro de téléphone
    const phonePattern = /^0[5-7][0-9]{8}$/;
    setPhoneError(phonePattern.test(value) || value === "" ? "" : "Numéro de téléphone invalide");
  };

  // Fonction pour gérer les changements du coût maximum
  const handleCostChange = (e) => {
    const value = e.target.value;
    setMaxCost(value);
    // Vérification que le coût est un nombre et supérieur ou égal à 500
    setCostError(value >= 500 && !isNaN(value) ? "" : "Le coût doit être un nombre supérieur ou égal à 500");
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Si des erreurs sont présentes, ne pas soumettre
    if (phoneError || costError) return;

    // Affichage des données dans la console (juste mtn)
    console.log({
      selectedWilaya,
      selectedType,
      phoneNumber,
      maxCost,
      deadline,
      projectName,
      projectDescription,
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center relative">
      {/* Background visuel pour l'écran */}
      <div
        className="hidden md:block h-full w-full absolute"
        style={{
          background: "linear-gradient(130deg, #608BC1, #F3F3E0)",
        }}
      ></div>

      {/* Conteneur principal du formulaire */}
      <div className="bg-white pl-12 pr-12 mt-[120px] pt-8 mb-[70px] pb-14 rounded-[25px] shadow-lg w-full sm:w-[90%] md:w-[850px] z-10">
        {/* Titre du formulaire */}
        <p className="text-2xl sm:text-3xl font-bold text-primary mb-2 text-center">Demande de Devis</p>
        <p className="text-[#608BC1] mb-4 text-center">
          Veuillez remplir ce formulaire pour envoyer votre demande de devis aux artisans.
        </p>
        <hr className="border-t border-gray-300 mb-6" />

        {/* Formulaire de demande de devis */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sélection de la wilaya et du type de service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Wilaya</label>
              <Select
                value={selectedWilaya}
                onChange={setSelectedWilaya}
                options={wilayaOptions}
                placeholder="Sélectionnez la wilaya"
                className="inputdemande"
                styles={{
                  control: (base) => ({
                    ...base,
                    boxShadow: "none",
                    "&:hover": { borderColor: "#608BC1" },
                  }),
                
                }}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Type de Service</label>
              <Select
                value={selectedType}
                onChange={setSelectedType}
                options={typeOptions}
                placeholder="Sélectionnez un service"
                className="inputdemande"
                styles={{
                  control: (base) => ({
                    ...base,
                    boxShadow: "none",
                    "&:hover": { borderColor: "#608BC1" },
                  }),
                }}
                required
              />
            </div>
          </div>

          {/* Champ pour le numéro de téléphone et le coût maximum */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Numéro de téléphone</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="inputdemande"
                placeholder="Ex: 0555555555"
                required
              />
              {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Coût maximum</label>
              <input
                type="text"
                value={maxCost}
                onChange={handleCostChange}
                className="inputdemande"
                placeholder="Ex: 10000 DZD"
                required
              />
              {costError && <p className="text-red-500 text-sm">{costError}</p>}
            </div>
          </div>

          {/* Date limite de projet */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Date limite</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="inputdemande"
              required
            />
          </div>

          {/* Nom du projet */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nom du projet</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="inputdemande"
              required
            />
          </div>

          {/* Description du projet */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Description du projet</label>
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="inputdemande"
              rows="8"
              required
            />
          </div>

          {/* Bouton de soumission du formulaire */}
          <div className="text-center">
            <button
              type="submit"
              className="w-[220px] py-2 bg-[#003366] text-white font-semibold rounded-[20px] transition-transform hover:scale-105"
            >
              Envoyer la demande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemandeDevis;
