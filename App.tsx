
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Library from './views/Library';
import About from './views/About';
import { ICONS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'library' | 'about'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'library': return <Library />;
      case 'about': return <About />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-urdu text-right" dir="rtl">
      <Navbar activePage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>

      <footer className="bg-emerald-900 text-white py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-xl font-bold mb-4">شعیب اسلامک آن لائن لائبریری</h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              علمِ دین کا مستند اور جدید پلیٹ فارم جو کہ حافظ مفتی محمد شعیب خان آلائی کی زیرِ نگرانی خدمتِ دین کے لیے مصروفِ عمل ہے۔
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">فوری روابط</h3>
            <ul className="space-y-2 text-emerald-100">
              <li><button onClick={() => setCurrentPage('home')}>صفحہ اول</button></li>
              <li><button onClick={() => setCurrentPage('library')}>کتب خانہ</button></li>
              <li><button onClick={() => setCurrentPage('about')}>تعارف</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">رابطہ کریں</h3>
            <p className="text-emerald-100 text-sm mb-2">ای میل: info@shuaiblibrary.com</p>
            <div className="flex justify-center md:justify-end gap-4 mt-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-emerald-700 rounded-full"></div>
              <div className="w-8 h-8 bg-emerald-700 rounded-full"></div>
              <div className="w-8 h-8 bg-emerald-700 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200 text-sm">
          © {new Date().getFullYear()} شعیب اسلامک لائبریری | تمام حقوق بحقِ ادارہ محفوظ ہیں۔
        </div>
      </footer>
    </div>
  );
};

export default App;
