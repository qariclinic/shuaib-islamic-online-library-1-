
import React, { useState } from 'react';
import { ICONS } from '../constants';
import { searchLibraryAssistant } from '../services/geminiService';
import { SearchResult } from '../types';

const GeminiSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await searchLibraryAssistant(query);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-emerald-600 p-2 rounded-full text-white">
          <ICONS.Sparkles className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-emerald-900">علمی و تحقیقی معاون (AI)</h2>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="کوئی بھی علمی یا دینی سوال پوچھیں..."
          className="flex-grow p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-700 text-white px-6 py-4 rounded-xl hover:bg-emerald-800 transition-all flex items-center gap-2 disabled:bg-slate-400"
        >
          {loading ? 'تلاش جاری...' : <ICONS.Search className="w-6 h-6" />}
        </button>
      </form>

      {loading && (
        <div className="mt-8 flex flex-col items-center gap-4 text-emerald-800">
          <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <p className="animate-pulse">تحقیق جاری ہے، براہ کرم انتظار کریں...</p>
        </div>
      )}

      {result && !loading && (
        <div className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-100 animate-fadeIn">
          <div className="prose prose-emerald max-w-none text-right leading-relaxed text-slate-800 urdu-text text-lg whitespace-pre-wrap">
            {result.text}
          </div>
          
          {result.sources.length > 0 && (
            <div className="mt-6 pt-4 border-t border-emerald-200">
              <p className="text-sm font-bold text-emerald-900 mb-2">حوالہ جات و ذرائع:</p>
              <div className="flex flex-wrap gap-2">
                {result.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-white text-emerald-700 px-3 py-1 rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors"
                  >
                    {source.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GeminiSearch;
