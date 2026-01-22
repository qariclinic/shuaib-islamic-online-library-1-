
import React from 'react';
import { ICONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* Intro Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="text-emerald-700 font-bold tracking-widest uppercase text-sm">ہمارا مشن</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            شعیب اسلامک لائبریری کا قیام اور اس کا علمی وژن
          </h1>
          <p className="text-lg text-slate-700 leading-loose urdu-text">
            اس ڈیجیٹل کتب خانے کا مقصد دورِ حاضر کے جدید علمی و تحقیقی تقاضوں کو پورا کرنا ہے۔ ہم چاہتے ہیں کہ ہر طالبِ علم اور محقق کی رسائی قرآن، سنت اور اسلاف کی معتبر کتب تک آسان اور تیز رفتار ہو۔ ہمارا وژن ایک ایسے معاشرے کی تشکیل ہے جہاں علمِ دین کی روشنی ہر گھر تک پہنچے۔
          </p>
          <div className="flex gap-4">
            <div className="bg-emerald-50 p-4 rounded-2xl flex-1 border border-emerald-100">
              <span className="block text-3xl font-bold text-emerald-800 mb-2">10k+</span>
              <span className="text-slate-600 text-sm">مستند کتب</span>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl flex-1 border border-emerald-100">
              <span className="block text-3xl font-bold text-emerald-800 mb-2">50+</span>
              <span className="text-slate-600 text-sm">علمی موضوعات</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://picsum.photos/id/1/800/600" alt="Mufti Shuaib Allai" className="rounded-3xl shadow-2xl w-full border-8 border-white" />
        </div>
      </section>

      {/* Founder Profile */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-emerald-900 underline underline-offset-8">بانی کا تعارف</h2>
          <div className="space-y-6 text-lg text-slate-700 leading-loose urdu-text">
            <p>
              <strong>حافظ مفتی محمد شعیب خان آلائی</strong> ایک ممتاز عالمِ دین، مفتی اور محقق ہیں۔ آپ نے اپنی زندگی کا بیشتر حصہ تدریسِ قرآن و سنت اور فقہی ابحاث کے لیے وقف کیا ہے۔ آپ کے علمی مقالات اور خطبات نے ہزاروں اذہان کی آبیاری کی ہے۔
            </p>
            <p>
              اس لائبریری کا قیام آپ کے اسی علمی جذبے کا نتیجہ ہے کہ "علم صرف کاغذوں تک محدود نہ رہے بلکہ ٹیکنالوجی کے ذریعے عالمگیر سطح پر عام ہو۔"
            </p>
          </div>
          <div className="flex justify-center gap-6 pt-6">
            <button className="flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">FB</div>
              فیس بک پیج
            </button>
            <button className="flex items-center gap-2 text-emerald-700 font-bold hover:underline">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">YT</div>
              یوٹیوب چینل
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto bg-emerald-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="relative z-10 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">ہمارے ساتھ جڑیں</h2>
            <p className="text-emerald-100">کوئی سوال ہو یا علمی تعاون کرنا چاہیں، ہمیں پیغام بھیجیں۔</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold">آپ کا نام</label>
              <input type="text" className="w-full p-4 bg-emerald-800 border border-emerald-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-emerald-400" placeholder="نام درج کریں" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">ای میل ایڈریس</label>
              <input type="email" className="w-full p-4 bg-emerald-800 border border-emerald-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-emerald-400" placeholder="example@email.com" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold">آپ کا پیغام</label>
              <textarea rows={4} className="w-full p-4 bg-emerald-800 border border-emerald-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 placeholder-emerald-400" placeholder="اپنا پیغام یہاں لکھیں..."></textarea>
            </div>
            <button className="md:col-span-2 bg-white text-emerald-900 font-bold py-4 rounded-xl hover:bg-emerald-50 transition-all text-xl">پیغام بھیجیں</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
