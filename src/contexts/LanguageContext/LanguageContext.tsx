// import { createContext, useContext, useState, type ReactNode } from 'react';

// // ── Types ────────────────────────────────────────────────────────────────────

// export type Language = 'en' | 'pt';

// interface LanguageContextType {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: (key: string) => string;
// }

// // ── Translations ─────────────────────────────────────────────────────────────

// const translations: Record<Language, Record<string, string>> = {
//   en: {
//     // Navbar
//     'nav.home': 'Home',
//     'nav.about': 'About',
//     'nav.projects': 'Projects',
//     'nav.contact': 'Contact',

//     // Hero
//     'hero.greeting': "Hi, I'm Enzo Rossi",
//     'hero.subtitle': 'Software Engineer',
//     'hero.cta': 'View my work',

//     // About
//     'about.title': 'About Me',
//     'about.description': 'I build modern web applications with a focus on clean code and great user experiences.',

//     // Projects
//     'projects.title': 'Projects',
//     'projects.viewCode': 'View Code',
//     'projects.viewDemo': 'Live Demo',

//     // Contact
//     'contact.title': 'Get in Touch',
//     'contact.name': 'Name',
//     'contact.email': 'Email',
//     'contact.message': 'Message',
//     'contact.send': 'Send Message',

//     // Footer
//     'footer.rights': 'All rights reserved.',
//   },
//   pt: {
//     // Navbar
//     'nav.home': 'Início',
//     'nav.about': 'Sobre',
//     'nav.projects': 'Projetos',
//     'nav.contact': 'Contato',

//     // Hero
//     'hero.greeting': 'Olá, sou Enzo Rossi',
//     'hero.subtitle': 'Engenheiro de Software',
//     'hero.cta': 'Ver meu trabalho',

//     // About
//     'about.title': 'Sobre Mim',
//     'about.description': 'Desenvolvo aplicações web modernas com foco em código limpo e ótimas experiências de usuário.',

//     // Projects
//     'projects.title': 'Projetos',
//     'projects.viewCode': 'Ver Código',
//     'projects.viewDemo': 'Ver Demo',

//     // Contact
//     'contact.title': 'Entre em Contato',
//     'contact.name': 'Nome',
//     'contact.email': 'E-mail',
//     'contact.message': 'Mensagem',
//     'contact.send': 'Enviar Mensagem',

//     // Footer
//     'footer.rights': 'Todos os direitos reservados.',
//   },
// };



// const LanguageContext = createContext<LanguageContextType | null>(null);



// export function LanguageProvider({ children }: { children: ReactNode }) {
//   // Tries to restore the user's last preference from localStorage
//   const saved = (localStorage.getItem('language') as Language) ?? 'en';
//   const [language, setLanguageState] = useState<Language>(saved);

//   const setLanguage = (lang: Language) => {
//     localStorage.setItem('language', lang);
//     setLanguageState(lang);
//   };

//   const t = (key: string): string =>
//     translations[language][key] ?? translations['en'][key] ?? key;

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }



// export function useLanguage(): LanguageContextType {
//   const ctx = useContext(LanguageContext);
//   if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
//   return ctx;
// }
