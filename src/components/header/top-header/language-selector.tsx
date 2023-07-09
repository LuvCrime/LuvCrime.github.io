import { useTranslation } from "react-i18next"
import { useState } from 'react';

type Lang = {
    [key: string]: { id: string };
  };
  
  const lngs: Lang = {
    en: { id: 'English' },
    ru: { id: 'Russian' },
    est: { id: 'Estonian' },
  }

  export const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    console.log(lang)
    const [selectedLanguage, setSelectedLanguage] = useState('');



  
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    setSelectedLanguage(selectedLang);
    void i18n.changeLanguage(selectedLang)
    // onLanguageChange(selectedLangCode);
  };
    
    return (
      <select value={selectedLanguage} onChange={handleLanguageChange}>
      {Object.keys(lngs).map((lng) => (
        <option key={lng} value={lng}>
          {lngs[lng].id}
        </option>
      ))}
    </select>
    )
  }