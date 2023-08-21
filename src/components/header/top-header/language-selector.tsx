import { useTranslation } from "react-i18next"
import { useState } from 'react';
import { useEffect, useRef } from "react";
import { SelectContainer, SelectButton, OptionItem, OptionsList } from "./styles";

type Lang = {
  [key: string]: { id: string };
};

const lngs: Lang = {
  en: { id: 'EN' },
  ru: { id: 'RU' },
  est: { id: 'EST' },
}

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      void i18n.changeLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('i18nextLng', selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (selectedLang: string) => {
    setSelectedLanguage(selectedLang);
    void i18n.changeLanguage(selectedLang);
    setIsDropdownOpen(false);
  };

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <SelectContainer ref={selectRef}>
      <SelectButton onClick={handleButtonClick}>{lngs[selectedLanguage]?.id}</SelectButton>
      {isDropdownOpen && (
        <OptionsList>
          {Object.keys(lngs).map((lng) => (
            <OptionItem key={lng} onClick={() => handleLanguageChange(lng)}>
              {lngs[lng].id}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  )
}