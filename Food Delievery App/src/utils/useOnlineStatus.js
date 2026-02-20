import { useState, useEffect, use } from 'react';

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  const updateOnlineStatus = () => {
    setOnlineStatus(navigator.onLine);
  };



  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  }, []);

  return onlineStatus;
}

export default useOnlineStatus;