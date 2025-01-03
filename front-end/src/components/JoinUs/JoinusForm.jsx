import React, { useState } from "react";
import Select from "react-select";

const RejoignezNous = () => {
  // Liste des wilayas (régions en Algérie) pour le menu déroulant
  const wilayas = [
    "Adrar", "Ain Defla", "Aïn Témouchent", "Alger", "Batna", "Béjaïa", "Biskra",
    "Blida", "Bordj Badji Mokhtar", "Bordj Bou Arréridj", "Bouira", "Djanet",
    "Djelfa", "El Bayadh", "El Menia", "El Oued", "El Tarf", "Ghardaia", "Guelma",
    "Illizi", "In Guezzam", "In Salah", "Jijel", "Khenchela", "Laghouat", "Mascara",
    "Médéa", "Mila", "Mostaganem", "M'Sila", "Naama", "Ouargla", "Oran", "Oum El Bouaghi",
    "Relizane", "Sétif", "Skikda", "Souk Ahras", "Souk Abrahm", "Tamanghasset", "Tébessa",
    "Tiemimoun", "Tindouf", "Tipasa", "Tissemsilt", "Tlemcen", "Touggourt"
  ];

  // Liste des types de services artisanaux pour la sélection
  const artisanTypes = ["Plomberie", "Peinture", "Maçonnerie", "Electricité", "Menuiserie", "Ménage"];

  // Transformation des listes 'wilayas' et 'artisanTypes' en options compatibles avec le composant react-select
  const wilayaOptions = wilayas.map(wilaya => ({ value: wilaya, label: wilaya }));
  const typeOptions = artisanTypes.map(type => ({ value: type, label: type }));

  // Déclaration des états avec useState pour gérer les valeurs des champs du formulaire
  const [selectedWilaya, setSelectedWilaya] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [minCost, setMinCost] = useState("");
  const [about, setAbout] = useState("");

  // Fonction pour gérer les changements du numéro de téléphone
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    // Vérification du format du numéro de téléphone
    const phonePattern = /^0[5-7][0-9]{8}$/;
    setPhoneError(phonePattern.test(value) || value === "" ? "" : "Numéro de téléphone invalide");
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Si des erreurs sont présentes, ne pas soumettre
    if (phoneError) return;

    // Affichage des données dans la console (juste pour l'instant)
    console.log({
      phoneNumber,
      selectedType,
      selectedWilaya,
      minCost,
      about
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center relative">
      {/* Fond de l'écran */}
      <div
        className="hidden md:block h-full w-full absolute"
        style={{
          background: "linear-gradient(130deg, #608BC1, #F3F3E0)",  // Fond en dégradé pour les grands écrans
        }}
      ></div>

      {/* Conteneur principal du formulaire */}
      <div className="bg-white pl-12 pr-12 mt-[100px] pt-8 mb-14 pb-14 rounded-[25px] shadow-lg w-full sm:w-[90%] md:w-[850px] z-10">
        <p className="text-2xl sm:text-3xl font-bold text-primary mb-2 text-center">Rejoignez-nous</p>
        <p className="text-[#608BC1] mb-4 text-center">
          Complétez ce formulaire pour créer un profil professionnel. Ajoutez vos informations et vos services pour attirer vos futurs clients
        </p>
        <hr className="border-t border-gray-300 mb-6" />

        {/* Le formulaire commence ici */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Section Informations Importantes */}
          <div>
            <h2 className="text-[#608BC1] font-semibold mb-2">Informations Importantes :</h2>
            <div className="space-y-4">
              {/* Champ pour le numéro de téléphone */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Numéro de téléphone</label>
                <input
                  type="text"
                  placeholder="Ex: +213 555 12 34 56"
                  value={phoneNumber}
                  onChange={handlePhoneChange}  
                  className="inputdemande"  
                  required
                />
                {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
              </div>
              
              {/* Menu déroulant pour sélectionner le type de service */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Service Proposés</label>
                <Select
                  value={selectedType}
                  onChange={setSelectedType}  
                  options={typeOptions}  
                  placeholder="Sélectionner un service"
                  className="focus:outline-none"
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderRadius: "8px",  
                      boxShadow: "none",
                      "&:hover": { borderColor: "#608BC1" },  
                    }),
                  }}
                  required
                />
              </div>

              {/* Menu déroulant pour sélectionner la wilaya */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Wilaya</label>
                <Select
                  value={selectedWilaya}
                  onChange={setSelectedWilaya}  // Mise à jour de l'état 'selectedWilaya'
                  options={wilayaOptions}  // Liste des wilayas disponibles
                  placeholder="Wilaya"
                  className="focus:outline-none"
                  styles={{
                    control: (base) => ({
                      ...base,
                      boxShadow: "none",
                      borderRadius: "8px",
                      "&:hover": { borderColor: "#608BC1" },
                    }),
                  }}
                  required
                />
              </div>

              {/* Champ pour le coût minimum */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Coût minimum</label>
                <input
                  type="number"
                  placeholder="Le prix minimum à partir du quel vous travaillez"
                  value={minCost}
                  onChange={(e) => setMinCost(e.target.value)}  // Mise à jour de l'état 'minCost'
                  className="inputdemande"
                />
              </div>
            </div>
          </div>

          {/* Section Informations Complémentaires */}
          <div>
            <h2 className="text-[#608BC1] font-semibold mb-2">Informations Complémentaires : </h2>
            <div className="space-y-4">
              {/* Champ "À propos de vous" */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">À propos de vous</label>
                <textarea
                  placeholder="Parlez-nous de vous"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}  // Mise à jour de l'état 'about'
                  rows={6}
                  className="inputdemande"
                  required
                />
              </div>
            </div>
          </div>

          {/* Bouton de soumission */}
          <div className="text-center">
            <button
              type="submit"
              className="w-[220px] py-2 bg-[#003366] text-white font-semibold rounded-[20px] transition-transform hover:scale-105"
            >
              Rejoindre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RejoignezNous;
