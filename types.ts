
export enum Category {
  Quran = 'قرآن کریم',
  Hadith = 'حدیث نبوی ﷺ',
  Fiqh = 'فقہ اسلامی',
  History = 'سیرت و تاریخ',
  Creed = 'عقائد و کلام',
  General = 'عمومی کتب'
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: Category;
  description: string;
  coverImage: string;
  downloadUrl: string;
  pdfUrl?: string;
}

export interface SearchResult {
  text: string;
  sources: { title: string; uri: string }[];
}
