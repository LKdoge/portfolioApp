'use client'; // Necesario porque usa hooks

import { FiHome, FiUser, FiSettings, FiMail, FiStar } from 'react-icons/fi';
import { useState } from 'react';

export default function IconGrid() {
  const [dynamicIcons, setDynamicIcons] = useState([
    { Icon: FiHome, name: "Inicio" },
    { Icon: FiUser, name: "Perfil" }
  ]);

  const addIcon = () => {
    const newIcons = [...dynamicIcons];
    newIcons.push({ 
      Icon: [FiSettings, FiMail, FiStar][newIcons.length % 3], 
      name: `Nuevo ${newIcons.length + 1}` 
    });
    setDynamicIcons(newIcons);
  };

  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {dynamicIcons.map((item, i) => (
          <div key={i} className="flex flex-col items-center p-2">
            <item.Icon className="w-6 h-6 text-blue-600" />
            <span className="mt-1 text-xs text-center">{item.name}</span>
          </div>
        ))}
      </div>
      <button 
        onClick={addIcon}
        className="mt-4 px-3 py-1 bg-blue-500 text-white rounded text-sm"
      >
        Añadir icono
      </button>
    </div>
  );
}