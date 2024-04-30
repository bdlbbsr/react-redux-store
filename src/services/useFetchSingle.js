import { useState } from 'react';
import apis from "./Apis";

export function useFetchSingle() {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchSingle = async (resource, id) => {
        try {
            setLoading(true);
            setData(null);
            const response = await apis.getSingleDataApi({ url: resource, id }, '');
            if (response) {
                setData(response);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };
    return { fetchSingle, data, loading };
}