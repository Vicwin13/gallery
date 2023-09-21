// MuuriGrid.js (Muuri grid component)
import React, { useEffect, useRef } from "react";
import Muuri from "muuri";

function MuuriGrid({ items, isLoading }) {
  const gridContainerRef = useRef(null);
  const muuriInstanceRef = useRef(null);

  useEffect(() => {
    if (!isLoading && items.length > 0) {
      muuriInstanceRef.current = new Muuri(gridContainerRef.current, {
        items: ".grid-item",
        layout: {
          columns: 3,
          rows: 3,
        },
        dragEnabled: true,
        showDuration: 4000,
      });
    }

    return () => {
      if (muuriInstanceRef.current) {
        muuriInstanceRef.current.destroy();
      }
    };
  }, [isLoading, items]);

  useEffect(() => {
    if (muuriInstanceRef.current) {
      muuriInstanceRef.current.refreshItems();
      muuriInstanceRef.current.layout();
    }
  }, [items]);

  return (
    <div className=" h-auto bg-primary " style={{ margin: "0 auto" }}>
      <div ref={gridContainerRef} className="relative grid  mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid-item absolute rounded  m-5 shadow hover:shadow-xl">
            <div className=" w-[18rem] h-[12rem]">
              <img
                className="h-full rounded w-full object-cover"
                src={item.source}
                alt={item.tag}
              />
            </div>
            <div className="text-center text-accent">
              <p className="font-bold uppercase">{item.title}</p>
              <p className="capitalize font-normal">{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MuuriGrid;
