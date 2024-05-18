import { useEffect } from "react";

const useTitle = (title ) => {
  useEffect(() => {
    document.title = `Atul Tingre - ${title}`;
  }, [title]);
  return null;
};

export default useTitle;
