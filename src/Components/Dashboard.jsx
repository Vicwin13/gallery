import { useRef, useEffect, useState } from "react";
import source from "../data/source.json";
import Muuri from "muuri";

export default function Dashboard() {
  const gridContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  let [display, setDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    console.log(filteredResults);
  }, [filteredResults]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults(display);
    } else {
      const filtered = display.filter((box) => {
        return (
          box.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          box.tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredResults(filtered);
    }
  }, [searchQuery, display]);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(source.images);
      setIsLoading(false);
    }, 2500);
  }, []);

  //for the muuri grid
  useEffect(() => {
    if (!isLoading) {
      const grid = new Muuri(gridContainerRef.current, {
        items: ".grid-item",
        layout: {
          columns: 3,
          rows: 3,
        },
        dragEnabled: true,
        showDuration: 4000,
      });
      return () => {
        grid.destroy();
      };
    }
  }, [isLoading]);

  return (
    <div className="">
      <div className="flex justify-center gap-1 items-center p-4">
        <input
          className="border md:w-96 w-52"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border px-3" type="submit">
          Search
        </button>
      </div>
      <section>
        {isLoading ? (
          <div className="h-screen z-30 flex justify-center items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-live="polite"
              aria-busy="true"
              aria-labelledby="title-05a desc-05a"
              className="w-12 h-12 animate animate-spin">
              <title id="title-05a">Icon title</title>
              <desc id="desc-05a">Some desc</desc>
              <circle
                cx="12"
                cy="12"
                r="10"
                className="stroke-slate-200"
                strokeWidth="4"
              />
              <path
                d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
                className="stroke-pink-500"
                strokeWidth="4"
              />
            </svg>
          </div>
        ) : (
          <div ref={gridContainerRef} className=" relative grid ">
            {filteredResults.map((item) => (
              <div key={item.id} className=" grid-item absolute m-5  border-2">
                <div className="w-[14rem] h-[12rem]">
                  <img
                    className="h-full w-full object-cover"
                    src={item.source}
                    alt={item.tag}
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold uppercase">{item.title}</p>
                  <p className="capitalize">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
