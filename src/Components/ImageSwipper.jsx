import React, { useState } from "react";

const ImageSwipper = ({ images }) => {
  const [imageOrder, setImageOrder] = useState(images);

  const handleSwipe = (index) => {
    console.log("swipping");
    setTimeout(() => {
      const newOrder = [...imageOrder];
      const movedImage = newOrder.splice(index, 1)[0];
      newOrder.push(movedImage);
      setImageOrder(newOrder);
    }, 500);
  };
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the context menu from appearing
  };
  return (
    <div className="relative sm:w-[350px] w-[200px] sm:h-[350px] h-[200px]">
      {imageOrder.map((image, index) => (
        <div
          onDrag={() => handleSwipe(index)}
          draggable
          // onTouchEnd={() => handleSwipe(index)}
          onContextMenu={handleContextMenu}
          // onDragStart={handleDragStart}
          // onDragEnd={handleDragEnd}
          key={index}
          className="absolute top-0 left-0 w-[100%] h-[100%] transition-transform duration-300 ease-in-out cursor-pointer"
          style={{
            // opacity: dragging ? 1 : 1,
            userSelect: "none",
            transition: "opacity 0.5s ease",
            zIndex: images.length - index,
            transform: `rotate(${
              index % 2 === 0 ? index * 4 - 8 : -(index * 4 - 8)
            }deg)`,
          }}
          data-index={index}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            data-index={index}
            className="w-full h-full object-cover  shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSwipper;
