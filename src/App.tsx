/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Wrapper } from "./sections"
import { useTranslation, Trans } from "react-i18next"

const lngs = {
  en: { id: 'English' },
  ru: { id: 'Russian' },
  est: { id: 'Estonian' },
}

export const App = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  console.log(lang)

  return (
    <>

      {Object.keys(lngs).map((lng) => (
        <button key={lng} onClick={() => i18n.changeLanguage(lng)}>{lngs[lng].id}</button>
      ))}

      {t('kek')}
      <Wrapper />
    </>
  )
}
