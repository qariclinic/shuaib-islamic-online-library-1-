
import React, { useState } from 'react';
import { ICONS } from '../constants';

interface NavbarProps {
  activePage: string;
  setPage: (page: 'home' | 'library' | 'about') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'صفحہ اول' },
    { id: 'library', label: 'کتب خانہ' },
    { id: 'about', label: 'ہمارے بارے میں' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
            <div className="bg-emerald-800 p-2 rounded-lg text-white">
              <ICONS.Book className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-emerald-900 hidden sm:block">شعیب اسلامک لائبریری</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setPage(item.id as any)}
                className={`transition-colors duration-200 font-bold ${
                  activePage === item.id ? 'text-emerald-700 underline underline-offset-8' : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-emerald-900 p-2">
              <ICONS.Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-xl">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setPage(item.id as any);
                setIsOpen(false);
              }}
              className={`text-right py-2 px-4 rounded-lg font-bold ${
                activePage === item.id ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
