import { createContext, useState } from 'react';

interface ErrorContextProps {
  error: boolean;
  errorMessage: string | undefined;
  setErrorMessage: (errorMessage: string) => void;
  setError: (error: boolean) => void;
}

export const ErrorContext = createContext<ErrorContextProps>({
  error: false,
  errorMessage: undefined,
  setErrorMessage: () => {},
  setError: () => {},
});

const ErrorContextProvider = ({ children }: any) => {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  return (
    <ErrorContext.Provider
      value={{
        error,
        setError,
        errorMessage,
        setErrorMessage
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;