import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 


const LoginForm = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-center text-2xl sm:text-3xl font-bold mb-6">Se Connecter</p>
      <div className="space-y-4">
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
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-400 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Mot de Passe
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Mot de Passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-400 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {password && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} 
            </button>
          )}
        </div>

        <a href="/forgot-password" className="text-sm text-primary hover:underline block">
          Mot de passe oublié ?
        </a>

        <div className="flex justify-center mt-10">
          <button className="button" type="submit">Se connecter</button>
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
          Vous n'avez pas de compte ?{" "}
          <a href="/signup" className="text-primary hover:underline">
            S'inscrire
          </a>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
