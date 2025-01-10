import { create } from "zustand";

interface FeedbackState {
  name: string;
  gmail: string;
  kepuasan: string | null;
  kritikDanSaran: string;
  tauLayananKamiDariMana: string;
  setName: (name: string) => void;
  setGmail: (gmail: string) => void;
  setKepuasan: (kepuasan: string | null) => void;
  setKritikDanSaran: (kritikDanSaran: string) => void;
  setTauLayananKamiDariMana: (value: string) => void;
  submitForm: () => void;
}

export const useFeedbackStore = create<FeedbackState & { isLoading: boolean }>((set, get) => ({
  name: "",
  gmail: "",
  kepuasan: null,
  kritikDanSaran: "",
  tauLayananKamiDariMana: "",
  isLoading: false,
  setName: (name) => set({ name }),
  setGmail: (gmail) => set({ gmail }),
  setKepuasan: (kepuasan) => set({ kepuasan }),
  setKritikDanSaran: (kritikDanSaran) => set({ kritikDanSaran }),
  setTauLayananKamiDariMana: (value) => set({ tauLayananKamiDariMana: value }),

  submitForm: async () => {
    const { name, gmail, kepuasan, kritikDanSaran, tauLayananKamiDariMana } = get();
    set({ isLoading: true });
    try {
      const response = await fetch("/api/submit-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          gmail,
          kepuasan,
          kritikDanSaran,
          tauLayananKamiDariMana,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      await response.json();
      alert("Feedback submitted successfully!");
      set({ name: "", gmail: "", kepuasan: null, kritikDanSaran: "", tauLayananKamiDariMana: "" });
    } catch {
      alert("There was an error submitting your feedback.");
    } finally {
      setTimeout(() => set({ isLoading: false }), 1000);
    }
  },
}));
