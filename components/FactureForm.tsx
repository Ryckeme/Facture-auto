"use client";

import { useState } from "react";

export default function FactureForm() {
  const [entreprise, setEntreprise] = useState("");
  const [client, setClient] = useState("");
  const [description, setDescription] = useState("");
  const [montant, setMontant] = useState("");
  
  const generatePDF = () => {
    const content = `
      <div style="font-family:Arial;padding:2rem;position:relative;">
        <img src="/logo-bg.png" style="position:absolute;opacity:0.05;top:30%;left:20%;width:300px;" />
        <h2>Facture</h2>
        <p><strong>Emetteur :</strong> ${entreprise}</p>
        <p><strong>Client :</strong> ${client}</p>
        <p><strong>Description :</strong> ${description}</p>
        <p><strong>Montant :</strong> ${montant} EUR</p>
        <p style="font-size:0.8rem;color:gray;margin-top:2rem">
          TVA non applicable article 293 B du CGI
        </p>
      </div>
    `;
  import("html2pdf.js").then((html2pdf) => {
    html2pdf.default()
      .from(content)
      .set({
        margin: 0.5,
        filename: `facture-${Date.now()}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
       })
       .save();
  });
};
 return (
   <div className="max-w-xl mx-auto p-6 bg-white rounded shadow space-y-4">
     <img src="/logo.png" alt="Logo entreprise" className="h-16 mx-auto mb-4" />
     <h1 className="text-2xl font-bold text-center">Generateur de Facture</h1>
     <input
       type="text"
       placeholder="Nom de l'entreprise"
       value={entreprise}
       onChange={(e) => setEntreprise(e.target.value)}
       className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        placeholder="Client"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        className="w-full border px-3 py-2 rounded"
       />
       <textarea

       placeholder="Description"
       value={description}
       onChange={(e) => setDescription(e.target.value)}
       className="w-full border px-3 py-2 rounded"
       />
       <input
          type="number"
          placeholder="Montant (EUR)"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={generatePDF}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
         >
          Generer PDF
         </button>
       </div>
     );
   }
