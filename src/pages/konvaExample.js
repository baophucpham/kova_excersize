import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

function KonvaExample() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newRotation = scrollTop % 360; // Đảm bảo góc quay trong khoảng 0-359 độ
      setRotation(newRotation);
    };

    // Lắng nghe sự kiện scroll
    window.addEventListener('scroll', handleScroll);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  return (
    <div style={{ height: '200vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Stage width={stageWidth} height={stageHeight}>
          <Layer>
            <Rect
              x={stageWidth / 2 - 150}
              y={stageHeight / 2 - 100}
              width={300}
              height={200}
              fill="#C0C0C0"
              stroke="black"
              strokeWidth={1}
              cornerRadius={30}
              rotation={rotation} // Sử dụng state để cập nhật góc quay
              shadowColor="black"
              shadowBlur={10}
              shadowOffsetX={10}
              shadowOffsetY={10}
              shadowOpacity={0.5}
              draggable
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default KonvaExample;
