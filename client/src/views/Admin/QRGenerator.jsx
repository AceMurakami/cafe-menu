import React, { useState } from 'react';

function QRGenerator() {
  const [table, setTable] = useState('');
  const [qrUrl, setQrUrl] = useState(null);

  const generateQR = async () => {
    const res = await fetch(`/api/admin/qr?table=${table}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    setQrUrl(url);
  };

  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-4 py-10">
      <div className="bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-md font-sans">
        <h2 className="text-2xl font-playfair italic text-[#3E2C23] mb-6 text-center">
          Generate Table QR Code
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Enter Table Number"
            value={table}
            onChange={(e) => setTable(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9C3A1]"
          />

          <button
            onClick={generateQR}
            className="w-full bg-[#D9C3A1] hover:bg-[#CBB291] text-[#3E2C23] italic underline font-cinzel py-2 rounded-full shadow-md transition-all duration-200"
          >
            Generate QR
          </button>
        </div>

        {qrUrl && (
          <div className="mt-6 flex flex-col items-center">
            <p className="text-[#3E2C23] italic mb-2">QR Code for Table {table}</p>
            <img src={qrUrl} alt="QR Code" className="w-40 h-40 rounded border" />
          </div>
        )}
      </div>
    </div>
  );
}

export default QRGenerator;