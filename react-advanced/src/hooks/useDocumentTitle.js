import { useEffect } from "react";

function useDocumentTitle(title, depen) {
  useEffect(() => {
    document.title = title;
  }, depen);
}

export default useDocumentTitle;
