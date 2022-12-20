import {useState, useCallback} from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/JSON'}) => {

        setLoading(true);

        try {
            const response = await fetch(url, {
                method, body, headers
            });

            if (!response.ok) {
                throw new Error(`not fetch ${url}, status ${response.status}`);
            }

            const data = await response.json();

            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            throw e;
            setError(e.message)
        }

    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {loading, request, error, clearError}

}