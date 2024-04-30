import { useState } from 'react';

import apis from "./Apis";

export function useFetchByLoad() {
   
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetch = async (params) => {
        try {
            setLoading(true);
            setData(null);
            const response = await apis.getDataApi({ ...params, query: params.query ? JSON.parse(params.query) : {} }, '');
            if (response) {
                setData(response);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };
    return { fetch, data, loading };
}