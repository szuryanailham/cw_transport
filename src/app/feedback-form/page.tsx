"use client";
import React from "react";
import { useFeedbackStore } from "@/store/feedbackStore";

function Page() {
  const { name, gmail, kepuasan, kritikDanSaran, tauLayananKamiDariMana, setName, setGmail, setKepuasan, setKritikDanSaran, setTauLayananKamiDariMana, submitForm, isLoading } = useFeedbackStore();

  const emotions = [
    { id: 1, label: "Sangat Tidak Puas", emoji: "😡" },
    { id: 2, label: "Tidak Puas", emoji: "😟" },
    { id: 3, label: "Biasa Saja", emoji: "😐" },
    { id: 4, label: "Puas", emoji: "😊" },
    { id: 5, label: "Sangat Puas", emoji: "😁" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
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

        {/* Gmail Input */}
        <div className="mb-4">
          <label className="block font-bold text-gray-700 dark:text-gray-300">Gmail</label>
          <input
            type="email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-white"
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        {/* Emotion Rating */}
        <div className="mb-4">
          <label className="block font-bold text-gray-700 dark:text-gray-300 mb-2">Tingkat Kepuasan</label>
          <div className="flex flex-wrap justify-around items-center p-2">
            {emotions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setKepuasan(item.label)} // Set the emotion to the label (string)
                className={`flex flex-col items-center focus:outline-none ${kepuasan === item.label ? "text-blue-500 scale-110" : "text-gray-400 hover:text-blue-300"}`}
              >
                <span className="text-2xl">{item.emoji}</span>
              </button>
            ))}
          </div>
          {kepuasan && (
            <p className="text-center mt-2 text-sm text-gray-500">
              Anda memilih: <span className="font-semibold">{kepuasan}</span>
            </p>
          )}
        </div>

        {/* Survey Form Input */}
        <div className="mb-4">
          <label className="block font-bold text-gray-700 dark:text-gray-300">Bagaimana Anda mengetahui kami?</label>
          <select
            value={tauLayananKamiDariMana}
            onChange={(e) => setTauLayananKamiDariMana(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-white"
            required
          >
            <option value="" disabled>
              Pilih salah satu
            </option>
            <option value="teman">Teman</option>
            <option value="media_sosial">Media Sosial</option>
            <option value="iklan">Iklan</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block font-bold text-gray-700 dark:text-gray-300">Kritik & Saran</label>
          <textarea
            value={kritikDanSaran}
            onChange={(e) => setKritikDanSaran(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:text-white"
            placeholder="Bagikan pengalaman atau feedback Anda"
            rows={4}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-400"
          disabled={isLoading}
        >
          {isLoading ? <span className="loading loading-spinner loading-md"></span> : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Page;
