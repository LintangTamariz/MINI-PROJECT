import {useState, useEffect} from "react";
import {request} from "../request"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await request.get(url);
                setData(res.data.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return { data, loading, error}
}

export default useFetch