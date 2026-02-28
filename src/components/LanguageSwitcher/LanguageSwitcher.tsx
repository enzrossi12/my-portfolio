// import { useLanguage, type Language } from '../../contexts/LanguageContext';

// const LANGUAGES: { code: Language; label: string }[] = [
//   { code: 'en', label: 'EN' },
//   { code: 'pt', label: 'PT' },
// ];

// export default function LanguageSwitcher() {
//   const { language, setLanguage } = useLanguage();

//   return (
//     <div style={styles.wrapper}>
//       {LANGUAGES.map(({ code, label }, i) => (
//         <button
//           key={code}
//           onClick={() => setLanguage(code)}
//           aria-label={`Switch to ${code.toUpperCase()}`}
//           style={{
//             ...styles.btn,
//             ...(i === 0 ? styles.btnLeft : styles.btnRight),
//             ...(language === code ? styles.btnActive : styles.btnInactive),
//           }}
//         >
//           {label}
//         </button>
//       ))}
//     </div>
//   );
// }

// const styles: Record<string, React.CSSProperties> = {
//   wrapper: {
//     display: 'inline-flex',
//     borderRadius: 6,
//     overflow: 'hidden',
//     border: '1px solid rgba(255,255,255,0.3)',
//   },
//   btn: {
//     padding: '4px 12px',
//     fontSize: 13,
//     fontWeight: 600,
//     letterSpacing: '0.05em',
//     cursor: 'pointer',
//     border: 'none',
//     transition: 'background 0.2s, color 0.2s',
//   },
//   btnLeft: {
//     borderRight: '1px solid rgba(255,255,255,0.3)',
//   },
//   btnRight: {},
//   btnActive: {
//     background: '#fff',
//     color: '#111',
//   },
//   btnInactive: {
//     background: 'transparent',
//     color: 'rgba(255,255,255,0.7)',
//   },
// };
