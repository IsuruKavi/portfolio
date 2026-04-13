import { useEffect, useState } from "react";


export const useTheme = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || "theme-default");
    useEffect(() => {
        const root = window.document.documentElement;
        // Handle theme
        root.classList.remove('theme-purple', 'theme-orange'); 
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme }

}