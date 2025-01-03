import React, { useState } from "react";

const SignupForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");  // Champ de confirmation du mot de passe
  const [passwordError, setPasswordError] = useState(""); // Erreur si les mots de passe ne correspondent pas

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    
    if (passwordError) {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas.");
      return;
    }

    
    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("Email:", email);
    console.log("Mot de Passe:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-center text-2xl sm:text-3xl font-bold mb-6">S'inscrire</p>
      <div className="space-y-5">
        {/* Pour le nom : */}
        <div className="space-y-2">
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={handleInputChange(setNom)}
            required
            className="w-full p-3 border border-gray-400 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Pour le prénom : */}
        <div className="space-y-2">
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
            Prénom
          </label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={handleInputChange(setPrenom)}
            required
            className="w-full p-3 border border-gray-400 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Pour l'email : */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Adresse Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Adresse Email"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
            className="w-full p-3 border border-gray-400 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Pour le mot de passe : */}
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mot de Passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Mot de Passe"
            value={password}
            onChange={handleInputChange(setPassword)}
            required
            className="w-full p-3 border border-gray-400 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Pour la confirmation du mot de passe : */}
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirmer le Mot de Passe
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirmer le Mot de Passe"
            value={confirmPassword}
            onChange={handleInputChange(setConfirmPassword)}
            required
            className="w-full p-3 border border-gray-400 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Afficher l'erreur si les mots de passe ne correspondent pas */}
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

        {/* Bouton d'inscription */}
        <div className="flex justify-center mt-10">
          <button className="button" type="submit">S'inscrire</button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center space-x-4">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="text-gray-500 font-medium">Ou</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="flex items-center justify-center w-full sm:w-4/5 py-2 border border-gray-300 rounded-[20px] bg-white hover:bg-gray-100"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            <span className="text-gray-600 font-medium">Continuer avec Google</span>
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <span className="text-sm text-gray-600">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-[#133E87] hover:underline">
            Se connecter
          </a>
        </span>
      </div>
    </form>
  );
};

export default SignupForm;
