import React from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import CodeInput from "./CodeInput";

const Verification = ()=>{
    const handleComplete = (code) => {
        console.log("Code complet saisi :", code);
      };
    
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center w-20 h-20 rounded-full border border-[#133E87] bg-white">
            <IoShieldCheckmarkOutline className="text-[#133E87] text-[50px]" />
            </div>
            <p className="text-center text-lg sm:text-2xl font-bold mb-6">Vérification du Code</p>
            <p className="text-center font-semibold">veuillez insérer le code à 6 chiffres que nous venons d’envoyer a votre adresse email</p>
            <CodeInput onComplete={handleComplete}/>
            <div className="flex justify-center mt-10 w-4/5">
                <button className="button" type="submit">Vérifier et Continuer</button>
            </div>
            
        </div>
        

    );
};
export default Verification;