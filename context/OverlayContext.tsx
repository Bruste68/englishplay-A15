import React, { createContext, useCallback, useContext, useState } from "react";

type Ctx = {
  myVisible: boolean;
  openMy: () => void;
  closeMy: () => void;
  toggleMy: () => void;
};
const OverlayContext = createContext<Ctx | null>(null);

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [myVisible, setMyVisible] = useState(false);
  const openMy = useCallback(() => setMyVisible(true), []);
  const closeMy = useCallback(() => setMyVisible(false), []);
  const toggleMy = useCallback(() => setMyVisible(v => !v), []);
  return (
    <OverlayContext.Provider value={{ myVisible, openMy, closeMy, toggleMy }}>
      {children}
    </OverlayContext.Provider>
  );
}
export const useOverlay = () => {
  const v = useContext(OverlayContext);
  if (!v) throw new Error("useOverlay must be used within OverlayProvider");
  return v;
};
