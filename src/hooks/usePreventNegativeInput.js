import { useEffect } from 'react';

const usePreventNegativeInput = identifier => {
  useEffect(() => {
    let numberInput;

    if (typeof identifier === 'string') {
      numberInput = document.getElementById(identifier);
    } else if (identifier && identifier.current) {
      numberInput = identifier.current;
    }

    if (!numberInput) return;

    const handleInput = e => {
      const value = parseInt(e.target.value, 10);

      if (Number.isNaN(value) || value <= 0) {
        e.target.value = 1;
      }
    };

    const handleKeydown = e => {
      if (
        (e.keyCode === 40 && parseInt(e.target.value, 10) === 1) ||
        (e.keyCode === 38 && e.target.value === '')
      ) {
        e.preventDefault();
      }
    };

    const handleWheel = e => {
      if (parseInt(e.target.value, 10) === 1 && e.deltaY > 0) {
        e.preventDefault();
      }
    };

    numberInput.addEventListener('input', handleInput);
    numberInput.addEventListener('keydown', handleKeydown);
    numberInput.addEventListener('wheel', handleWheel);

    return () => {
      numberInput.removeEventListener('input', handleInput);
      numberInput.removeEventListener('keydown', handleKeydown);
      numberInput.removeEventListener('wheel', handleWheel);
    };
  }, [identifier]);
};

export default usePreventNegativeInput;
