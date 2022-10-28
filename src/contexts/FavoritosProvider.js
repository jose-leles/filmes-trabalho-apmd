import { createContext, useState } from "react";

export const FavoritosContext = createContext([]);

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function adicionar(media) {
    media.favorite = !media.favorite;
    setFavoritos([...favoritos, media]);
  }

  function remover(media) {
    media.favorite = !media.favorite;
    let list = favoritos.filter(({ id }) => media.id !== id);
    setFavoritos(list);
  }

  return (
    <FavoritosContext.Provider value={{ adicionar, remover, favoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
}
