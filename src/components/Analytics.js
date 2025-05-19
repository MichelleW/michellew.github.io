import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag === 'function') {
            window.gtag('config', 'G-89WCEQVD90', {
                page_path: location.pathname + location.search,
                page_location: window.location.href,
                page_title: document.title,
            });
        }
    }, [location]);

    return null;
}; 