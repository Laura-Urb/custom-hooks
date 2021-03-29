import React, { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // setTimeout(() => {
        if (isMounted.current) {
          setState({
            data: data,
            loading: false,
            error: null,
          });
        }
        // console.log(data);
        // }, 4000);
      })
      .catch(() => {
        setState({ data: null, loading: false, error: "Error" });
      });
  }, [url]);

  return state;
};
