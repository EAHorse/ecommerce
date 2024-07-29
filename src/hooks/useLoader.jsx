import { useState, useEffect } from 'react';

const useLoader = (loadingTime = 2000) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), loadingTime);
    return () => clearTimeout(timer);
  }, [loadingTime]);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return [loading, startLoading, stopLoading];
};

export default useLoader;