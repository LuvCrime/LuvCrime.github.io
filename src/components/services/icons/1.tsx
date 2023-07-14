import { useContext } from "react"
import { ThemeContext } from '../../../App';

export const SitesCreating = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" />
            <path d="M2 7L22 7" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}