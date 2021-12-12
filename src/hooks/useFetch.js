import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMounted = useRef(true);

  useEffect(() => {
    (async function () {
      if (isMounted) {
        try {
          setLoading(true);
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    })();

    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { data, loading, error };
}
