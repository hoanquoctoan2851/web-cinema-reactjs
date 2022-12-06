import { useEffect } from 'react';

const useWindowListener = (type, callback, condition = true) => {
  useEffect(() => {
    if (condition) {
      window.addEventListener(type, callback);
      return () => {
        window.removeEventListener(type, callback);
      };
    }
  }, [callback, condition, type]);
};

export default useWindowListener;
