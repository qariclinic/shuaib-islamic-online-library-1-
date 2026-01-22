
import React from 'react';
import GeminiSearch from '../components/GeminiSearch';
import { ICONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/119/1920/1080?blur=5" 
            className="w-full h-full object-cover" 
            alt="Library Background" 
          />
          <div className="absolute inset-0 bg-emerald-950/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg leading-tight">
            شعیب اسلامک آن لائن لائبریری
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100/90 leading-relaxed font-light italic">
            "علم کی شمع سے جہالت کے اندھیروں کو مٹانا ہی ہمارا وژن ہے"
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full text-xl font-bold transition-all shadow-xl hover:scale-105">
              کتب خانہ دیکھیں
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full text-xl font-bold transition-all backdrop-blur-sm">
              ہمارا تعارف
            </button>
          </div>
        </div>
      </section>

      {/* Gemini Search Integration */}
      <section className="px-6 -mt-32 relative z-20">
        <GeminiSearch />
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 underline underline-offset-8 decoration-emerald-500">لائبریری کے اہم شعبے</h2>
          <p className="text-slate-600">جدید علمی تقاضوں کے مطابق ترتیب دیے گئے مختلف دینی و تحقیقی شعبے</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'قرآن کریم', desc: 'تفسیر، تراجم اور تلاوت کے مستند ذخائر', color: 'bg-emerald-100', icon: 'Book' },
            { title: 'حدیثِ نبوی ﷺ', desc: 'صحاح ستہ اور دیگر کتبِ احادیث کی تحقیق', color: 'bg-blue-100', icon: 'Sparkles' },
            { title: 'فقہ و فتاویٰ', desc: 'جدید مسائل اور مذاہب اربعہ کی فقہی کتب', color: 'bg-amber-100', icon: 'User' },
            { title: 'سیرت و تاریخ', desc: 'انبیاء کرام اور اسلاف کے عہد کا روشن تذکرہ', color: 'bg-rose-100', icon: 'Book' },
            { title: 'عقائد و تصوف', desc: 'روحانیت اور علمی عقائد کی اصلاحی کتب', color: 'bg-purple-100', icon: 'Sparkles' },
            { title: 'تحقیقی مقالات', desc: 'معاصر علما کے جدید علمی و تحقیقی مضامین', color: 'bg-teal-100', icon: 'Search' },
          ].map((cat, i) => (
            <div key={i} className={`p-8 rounded-3xl ${cat.color} hover:shadow-2xl transition-all cursor-pointer group border border-transparent hover:border-emerald-200`}>
              <div className="bg-white p-4 rounded-2xl w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {cat.icon === 'Book' && <ICONS.Book className="w-8 h-8 text-emerald-800" />}
                {cat.icon === 'Sparkles' && <ICONS.Sparkles className="w-8 h-8 text-blue-800" />}
                {cat.icon === 'Search' && <ICONS.Search className="w-8 h-8 text-teal-800" />}
                {cat.icon === 'User' && <ICONS.User className="w-8 h-8 text-amber-800" />}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-slate-700 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Scholar Quote */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-24 h-24 bg-emerald-600 rounded-full mx-auto flex items-center justify-center text-5xl">❝</div>
          <p className="text-3xl md:text-4xl italic leading-loose font-serif">
            "دینی تعلیمات کو عصری اسلوب میں پیش کرنا اور گمراہ کن نظریات کا علمی تعاقب کرنا وقت کی سب سے بڑی ضرورت ہے۔"
          </p>
          <div className="pt-4">
            <h4 className="text-2xl font-bold text-emerald-400">حافظ مفتی محمد شعیب خان آلائی</h4>
            <p className="text-slate-400 mt-2">بانی و مدیرِ اعلیٰ: شعیب اسلامک لائبریری</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
