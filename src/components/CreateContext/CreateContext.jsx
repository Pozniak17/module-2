import { createContext } from 'react';
import { ReactDOM } from 'react-dom/client';

//! Функція createContext()

const MyContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContext.Provider value={/* context value */}>
    <App />
  </MyContext.Provider>
);

//! Хук useContext()
