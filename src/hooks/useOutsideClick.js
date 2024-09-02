import { useEffect, useRef } from "react";

export default function useOutsideClick(closeModal, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // console.log("close modal");
        closeModal();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [closeModal, listenCapturing]);
  return { ref };
}
