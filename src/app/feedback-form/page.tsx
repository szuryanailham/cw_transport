"use client";
import React, { useState } from "react";

function Page() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [emotion, setEmotion] = useState<number | null>(null);

  const emotions = [
    { id: 1, label: "Sangat Tidak Puas", emoji: "😡" },
    { id: 2, label: "Tidak Puas", emoji: "😟" },
    { id: 3, label: "Biasa Saja", emoji: "😐" },
    { id: 4, label: "Puas", emoji: "😊" },
    { id: 5, label: "Sangat Puas", emoji: "😁" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Menyiapkan pesan yang akan dikirim ke WhatsApp
    const message = `
  📝 *Feedback Form* 📝

  👤 *Nama:* ${name}
  📞 *Nomor Telepon:* ${phone}
  😌 *Kepuasan:* ${emotions.find((e) => e.id === emotion)?.label || "Belum dipilih"}
  💬 *Kritik & Saran:* 
  ${description}
  
  Terima kasih atas feedback Anda! 🙏
`;

    // Mengencode pesan untuk digunakan dalam URL WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Membuka WhatsApp dengan pesan yang sudah disiapkan
    const whatsappURL = `https://wa.me/628562711149?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // Reset form setelah pengiriman
    setName("");
    setPhone("");
    setDescription("");
    setEmotion(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md w-full max-w-lg sm:max-w-md">
        <h2 className="text-2xl font-bold mb-4 dark:text-white text-center">Feedback Form</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block font-bold text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-white"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block font-bold text-gray-700 dark:text-gray-300">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-white"
            placeholder="Masukkan nomor telepon Anda"
            required
          />
        </div>

        {/* Emotion Rating */}
        <div className="mb-4">
          <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2">Tingkat Kepuasan</label>
          <div className="flex flex-wrap justify-around items-center p-2">
            {emotions.map((item) => (
              <button key={item.id} type="button" onClick={() => setEmotion(item.id)} className={`flex flex-col items-center focus:outline-none ${emotion === item.id ? "text-blue-500 scale-110" : "text-gray-400 hover:text-blue-300"}`}>
                <span className="text-2xl">{item.emoji}</span>
              </button>
            ))}
          </div>
          {emotion && (
            <p className="text-center mt-2 text-sm text-gray-500">
              Anda memilih: <span className="font-semibold">{emotions.find((e) => e.id === emotion)?.label}</span>
            </p>
          )}
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block font-bold text-gray-700 dark:text-gray-300">kritik & saran</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-white"
            placeholder="Bagikan pengalaman atau feedback Anda"
            rows={4}
            required
          />
        </div>
        <p className="text-center mt-4 text-gray-500 dark:text-gray-300 p-3">Silakan kirim di WhatsApp setelah submit.</p>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-400">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Page;
