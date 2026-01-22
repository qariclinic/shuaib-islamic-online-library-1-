
import React, { useState } from 'react';
import { ICONS } from '../constants';
import { Category, Book } from '../types';

const MOCK_BOOKS: Book[] = [
  { id: '1', title: 'صحیح البخاری', author: 'امام محمد بن اسماعیل بخاری', category: Category.Hadith, description: 'احادیثِ رسول ﷺ کا سب سے معتبر مجموعہ۔', coverImage: 'https://picsum.photos/id/101/300/450', downloadUrl: '#', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { id: '2', title: 'تفسیرِ ابنِ کثیر', author: 'امام حافظ عماد الدین ابنِ کثیر', category: Category.Quran, description: 'قرآن کریم کی سب سے زیادہ پڑھی جانے والی تفسیر۔', coverImage: 'https://picsum.photos/id/115/300/450', downloadUrl: '#', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { id: '3', title: 'الہدایہ', author: 'امام برہان الدین مرغینانی', category: Category.Fiqh, description: 'فقہ حنفی کی مستند اور معروف کتاب۔', coverImage: 'https://picsum.photos/id/116/300/450', downloadUrl: '#', pdfUrl: '' }, // Empty URL for alert testing
  { id: '4', title: 'کتاب التوحید', author: 'امام محمد بن عبدالوہاب', category: Category.Creed, description: 'عقیدہ توحید کی تفصیلی وضاحت۔', coverImage: 'https://picsum.photos/id/117/300/450', downloadUrl: '#', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { id: '5', title: 'سیرت النبی ﷺ', author: 'شبلی نعمانی', category: Category.History, description: 'آپ ﷺ کی حیاتِ مبارکہ کا جامع احاطہ۔', coverImage: 'https://picsum.photos/id/118/300/450', downloadUrl: '#', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  { id: '6', title: 'فتاویٰ شامی', author: 'علامہ ابنِ عابدین شامی', category: Category.Fiqh, description: 'فقہ حنفی کے فتاویٰ کا عظیم الشان مجموعہ۔', coverImage: 'https://picsum.photos/id/119/300/450', downloadUrl: '#', pdfUrl: '#' }, // # URL for alert testing
];

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleDownload = (book: Book) => {
    const url = book.pdfUrl || book.downloadUrl;
    if (!url || url === '#') {
      alert(`معذرت! اس کتاب ("${book.title}") کی ڈاؤن لوڈ فائل فی الوقت دستیاب نہیں ہے۔`);
      return;
    }
    
    // Create a temporary anchor to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${book.title}.pdf`);
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReadOnline = (book: Book) => {
    const url = book.pdfUrl || book.downloadUrl;
    if (!url || url === '#') {
      alert(`معذرت! اس کتاب ("${book.title}") کا آن لائن مطالعہ فی الوقت دستیاب نہیں ہے۔`);
      return;
    }
    window.open(url, '_blank');
  };

  const filteredBooks = MOCK_BOOKS.filter(book => {
    const matchesSearch = book.title.includes(searchTerm) || book.author.includes(searchTerm);
    const matchesCategory = activeCategory === 'all' || book.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 text-center md:text-right">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4 urdu-text">ڈیجیٹل کتب خانہ</h1>
        <p className="text-slate-600 max-w-2xl ml-auto urdu-text text-lg">
          ہزاروں مستند اسلامی کتب کا مجموعہ جو کہ مطالعہ اور ڈاؤن لوڈ کے لیے دستیاب ہے۔
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center">
        <div className="relative flex-grow w-full">
          <ICONS.Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="کتاب کا نام یا مصنف تلاش کریں..."
            className="w-full pr-12 pl-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none text-lg urdu-text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all urdu-text ${
              activeCategory === 'all' ? 'bg-emerald-700 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            تمام کتب
          </button>
          {Object.values(Category).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all urdu-text ${
                activeCategory === cat ? 'bg-emerald-700 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.id} className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col group h-full">
              {/* Cover Image & Overlay */}
              <div className="relative aspect-[3/4.5] overflow-hidden bg-slate-100">
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-emerald-600/90 backdrop-blur-md text-white text-xs px-4 py-1.5 rounded-full font-bold shadow-lg urdu-text">
                    {book.category}
                  </span>
                </div>

                {/* Hover Actions (Desktop Only Overlay) */}
                <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4">
                  <button 
                    onClick={() => handleReadOnline(book)}
                    className="bg-white text-emerald-900 p-4 rounded-full hover:bg-emerald-50 transition-all shadow-xl transform hover:-translate-y-1"
                    title="آن لائن مطالعہ کریں"
                  >
                    <ICONS.Book className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => handleDownload(book)}
                    className="bg-emerald-500 text-white p-4 rounded-full hover:bg-emerald-400 transition-all shadow-xl transform hover:-translate-y-1"
                    title="ڈاؤن لوڈ کریں"
                  >
                    <ICONS.Download className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-7 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors urdu-text leading-tight min-h-[3rem]">
                    {book.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm urdu-text">
                    <ICONS.User className="w-4 h-4" />
                    <span className="truncate">{book.author}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-6 urdu-text opacity-80 min-h-[2.5rem]">
                  {book.description}
                </p>
                
                {/* Action Buttons Area */}
                <div className="mt-auto space-y-3 pt-4 border-t border-slate-50">
                  <button
                    onClick={() => handleDownload(book)}
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 shadow-md urdu-text text-lg group/dl"
                  >
                    <ICONS.Download className="w-6 h-6 group-hover/dl:animate-bounce" />
                    <span>ڈاؤن لوڈ کریں</span>
                  </button>
                  
                  <button
                    onClick={() => handleReadOnline(book)}
                    className="w-full bg-white hover:bg-slate-50 text-emerald-800 border-2 border-emerald-100 font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 urdu-text"
                  >
                    <ICONS.Book className="w-5 h-5" />
                    <span>آن لائن مطالعہ</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-32 text-center space-y-6">
            <div className="bg-slate-50 w-24 h-24 rounded-full mx-auto flex items-center justify-center shadow-inner">
              <ICONS.Search className="w-12 h-12 text-slate-300" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-400 urdu-text">معذرت، کوئی کتاب نہیں ملی</h2>
              <p className="text-slate-400 urdu-text">براہِ کرم دوسرے الفاظ کے ساتھ تلاش کریں۔</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
