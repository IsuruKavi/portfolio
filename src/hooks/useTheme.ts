import { useEffect, useState } from "react";


export const useTheme = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || "theme-default");
    useEffect(() => {
        const root = window.document.documentElement;
        // Handle theme
        root.classList.remove('theme-purple', 'theme-amber','theme-cyan','theme-red','theme-lime','theme-navy',
            'theme-indigo'
        ); 
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme }

}