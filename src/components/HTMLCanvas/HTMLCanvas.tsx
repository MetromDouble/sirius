import React, { useState } from 'react';
import styled from 'styled-components';

import bg from 'src/assets/images/chess-bg.svg';

const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const Canvas = styled.div`
  width: 2000px;
  height: 2000px;
  /* background: linear-gradient(135deg, #000000 0%, #ffffff 22%, #207cca 38%, #7db9e8 100%); */
  background-image: url(${bg.toString()});
`;

interface IHTMLCanvasProps {
}

export const HTMLCanvas: React.FC<IHTMLCanvasProps> = () => {
  const [coords, setCoords] = useState<any>(null);

  const startTranslate = (ev: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = ev.currentTarget;
    const newWrapperRect = wrapper.getBoundingClientRect();

    setCoords({
      x1: Math.round(ev.clientX - newWrapperRect.left),
      y1: Math.round(ev.clientY - newWrapperRect.top),
      x2: Math.round(ev.clientX - newWrapperRect.left),
      y2: Math.round(ev.clientY - newWrapperRect.top),
      scrollLeft: wrapper.scrollLeft,
      scrollTop: wrapper.scrollTop,
    });
  };

  const updateTranslate = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (coords) {
      const wrapper = ev.currentTarget;
      const newWrapperRect = wrapper.getBoundingClientRect();
      const newCoords = {
        ...coords,
        x2: Math.round(ev.clientX - newWrapperRect.left),
        y2: Math.round(ev.clientY - newWrapperRect.top)
      };

      requestAnimationFrame(() => {
        wrapper.scroll(
          Math.max(0, newCoords.scrollLeft + newCoords.x1 - newCoords.x2),
          Math.max(0, newCoords.scrollTop + newCoords.y1 - newCoords.y2)
        );
      });

      setCoords(newCoords);
    }
  };

  const finishTranslate = () => {
    setCoords(null);
  };

  return (
    <CanvasWrapper
      onPointerDown={startTranslate}
      onPointerMove={updateTranslate}
      onPointerUp={finishTranslate}
    >
      <Canvas />
    </CanvasWrapper>
  );
};
