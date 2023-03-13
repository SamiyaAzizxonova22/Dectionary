import { useEffect, useState } from "react";

function useRequest(url = "https://api.dictionaryapi.dev/api/v2/entries/en/hi") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const rec = await fetch(url);
      if (!rec.ok) {
        throw new Error("something went wrong");
      }
      const res = await rec.json();
      setData(res);
      setError(null);
      console.log(data)
    } catch (err) {
      setError(err.message);
      console.log(err)
    }
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { data, loading, error, setError }
}

export default useRequest;
