import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function FabricExample() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Khởi tạo canvas Fabric
    const canvas = new fabric.Canvas(canvasRef.current);

    // Tạo hình chữ nhật
    const rect = new fabric.Rect({
      left: window.innerWidth / 2 - 150,
      top: window.innerHeight / 2 - 100,
      fill: '#C0C0C0',
      width: 300,
      height: 200,
      angle: 0,
      stroke: 'black',
      strokeWidth: 2,
      rx: 10, // Bán kính góc bo tròn
      ry: 10, // Bán kính góc bo tròn
      shadow: {
        color: 'black',
        blur: 10,
        offsetX: 10,
        offsetY: 10,
        opacity: 0.5,
      },
    });

    // Thêm hình chữ nhật vào canvas
    canvas.add(rect);

    // Lắng nghe sự kiện scroll để xoay hình chữ nhật
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newRotation = scrollTop % 360;
      rect.set('angle', newRotation);
      canvas.renderAll();
    };

    window.addEventListener('scroll', handleScroll);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
}

export default FabricExample;
