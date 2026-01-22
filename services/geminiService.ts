
import { GoogleGenAI } from "@google/genai";
import { SearchResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const searchLibraryAssistant = async (query: string): Promise<SearchResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `آپ ایک علمی اسلامی معاون ہیں۔ "شعیب اسلامک آن لائن لائبریری" کے تناظر میں اس سوال کا جواب دیں: ${query}`,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "You are a specialized Islamic research assistant. Always provide answers in Urdu/Arabic as appropriate, citing authentic sources. Maintain a respectful and scholarly tone."
      },
    });

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || "ماخذ",
      uri: chunk.web?.uri || ""
    })).filter((s: any) => s.uri) || [];

    return {
      text: response.text || "معذرت، معلومات دستیاب نہیں۔",
      sources
    };
  } catch (error) {
    console.error("Gemini Search Error:", error);
    return {
      text: "سرور کے ساتھ رابطہ کرنے میں مسئلہ پیش آیا۔ براہ کرم دوبارہ کوشش کریں۔",
      sources: []
    };
  }
};
