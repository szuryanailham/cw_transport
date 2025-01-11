import { create } from "zustand";
import { toast, Bounce } from "react-toastify";
interface FeedbackState {
  name: string;
  no_wa: string;
  kepuasan: string | null;
  kritikDanSaran: string;
  tauLayananKamiDariMana: string;
  setName: (name: string) => void;
  setno_wa: (no_wa: string) => void;
  setKepuasan: (kepuasan: string | null) => void;
  setKritikDanSaran: (kritikDanSaran: string) => void;
  setTauLayananKamiDariMana: (value: string) => void;
  submitForm: () => void;
}

export const useFeedbackStore = create<FeedbackState & { isLoading: boolean }>((set, get) => ({
  name: "",
  no_wa: "",
  kepuasan: null,
  kritikDanSaran: "",
  tauLayananKamiDariMana: "",
  isLoading: false,
  setName: (name) => set({ name }),
  setno_wa: (no_wa) => set({ no_wa }),
  setKepuasan: (kepuasan) => set({ kepuasan }),
  setKritikDanSaran: (kritikDanSaran) => set({ kritikDanSaran }),
  setTauLayananKamiDariMana: (value) => set({ tauLayananKamiDariMana: value }),

  submitForm: async () => {
    const { name, no_wa, kepuasan, kritikDanSaran, tauLayananKamiDariMana } = get();
    set({ isLoading: true });
    try {
      const response = await fetch("/api/submit-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          no_wa,
          kepuasan,
          kritikDanSaran,
          tauLayananKamiDariMana,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      await response.json();
      toast.success(" Feedback berhasil dikirim! Terima kasih atas masukannya 😊", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      set({ name: "", no_wa: "", kepuasan: null, kritikDanSaran: "", tauLayananKamiDariMana: "" });
    } catch {
      toast.error("⚠️ Gagal mengirim feedback. Silakan coba lagi", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setTimeout(() => set({ isLoading: false }), 1000);
    }
  },
}));
