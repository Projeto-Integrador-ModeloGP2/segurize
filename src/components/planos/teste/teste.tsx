import React, { useState } from 'react';

function Teste() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado de abertura do card
  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-gray-100 p-6 border border-gray-300 rounded-lg shadow-md w-72">
        <h2 className="text-xl font-semibold">Card com Lista</h2>
        
        <button 
          onClick={toggleCard} 
          className="flex items-center text-blue-500 mt-4 hover:text-blue-700"
        >
          <span className="mr-2">{isOpen ? 'Esconder' : 'Mostrar'} Lista</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Lista de informações que será mostrada/ocultada */}
        {isOpen && (
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>Informação 1</li>
            <li>Informação 2</li>
            <li>Informação 3</li>
            <li>Informação 4</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Teste;
