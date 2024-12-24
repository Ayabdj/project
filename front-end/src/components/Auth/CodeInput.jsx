import React, { useState, useRef } from "react";

const CodeInput = ({ onComplete }) => {
  const length = 6; 
  const [code, setCode] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // go suivant
      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      
      if (newCode.every((digit) => digit !== "") && onComplete) {
        onComplete(newCode.join(""));
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index]) {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);

      // reveni chaqmp précédent
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="flex space-x-5 mt-6">
      {code.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-12 text-center border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#133E87] text-lg text-gray-700 font-semibold"
        />
      ))}
    </div>
  );
};

export default CodeInput;
