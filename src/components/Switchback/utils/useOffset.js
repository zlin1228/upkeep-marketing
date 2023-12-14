import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

const useOffset = ref => {
  const { width } = useWindowSize();
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    if (ref.current) {
      const marginOffset = ref?.current?.offsetLeft;
      const paddingLeft = window
        .getComputedStyle(ref?.current, null)
        .getPropertyValue('padding-left')
        .replace('px', '');
      setOffset(marginOffset + Number(paddingLeft) - 270);
    }
  }, [ref, width]);

  return offset;
};

export default useOffset;
