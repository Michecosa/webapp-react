import { createContext, useContext, useState } from "react";
import { Mirage } from "ldrs/react";
import "ldrs/react/Mirage.css";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && (
        <div className="container text-center mt-5">
          <Mirage size="75" speed="3" color="white" />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
