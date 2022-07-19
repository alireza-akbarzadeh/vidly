const { useEffect, useState } = require("react");

const useOutsideClick = (ref) => {
  const [isOutSide, setIsOutSide] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutSide(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isOutSide };
};

export default useOutsideClick;
