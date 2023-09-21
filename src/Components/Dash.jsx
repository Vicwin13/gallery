// Dashboard.js (Parent component)
import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import MuuriGrid from "./MuuriGrid";
import source from "../data/source.json";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(source.images);
      setIsLoading(false);
    }, 2500);
  }, []);

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

  console.log("filtered", filteredResults);

  return (
    <div className="bg-primary">
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
          <MuuriGrid items={filteredResults} isLoading={isLoading} />
        )}
      </section>
    </div>
  );
}

export default Dashboard;
