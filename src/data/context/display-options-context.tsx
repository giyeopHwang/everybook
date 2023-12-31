import { createContext, useContext, useState } from 'react';

type DisplayOptionsContextValue = {
  showNavBar: boolean;
  showAmount: boolean;
  setShowNavBar: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAmount: React.Dispatch<React.SetStateAction<boolean>>;
};

type DisplayOptionsProviderProps = {
  children: React.ReactNode;
};

export const DisplayOptionsContext = createContext<DisplayOptionsContextValue>({
  showNavBar: true,
  showAmount: true,
  setShowNavBar: () => null,
  setShowAmount: () => null,
});

export const DisplayOptionsProvider = ({
  children,
}: DisplayOptionsProviderProps) => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [showAmount, setShowAmount] = useState(true);

  const value = { showNavBar, showAmount, setShowNavBar, setShowAmount };

  return (
    <DisplayOptionsContext.Provider value={value}>
      {children}
    </DisplayOptionsContext.Provider>
  );
};

export const useDisplayOptions = () => useContext(DisplayOptionsContext);
