"use client";

import { createContext, useContext, useState } from "react";

interface KioskVoiceState {
  speaking: boolean;
  setSpeaking: (val: boolean) => void;
  listening: boolean;
  setListening: (val: boolean) => void;
}

const KioskVoiceContext = createContext<KioskVoiceState>({
  speaking: false,
  setSpeaking: () => {},
  listening: false,
  setListening: () => {},
});

export function KioskVoiceProvider({ children }: { children: React.ReactNode }) {
  const [speaking, setSpeaking] = useState(false);
  const [listening, setListening] = useState(false);
  return (
    <KioskVoiceContext.Provider value={{ speaking, setSpeaking, listening, setListening }}>
      {children}
    </KioskVoiceContext.Provider>
  );
}

export function useKioskVoice() {
  return useContext(KioskVoiceContext);
}
