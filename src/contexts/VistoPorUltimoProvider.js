import { createContext, useState } from "react";

export const VistoPorUltimoContext = createContext([]);

export function VistoPorUltimoProvider({ children }) {
  const [filmes, setFilmes] = useState([]);
  const [series, setSeries] = useState([]);

  function adicionarMidia(media) {
    const { media_type, id } = media;
    if (media_type === "movie" && !filmes.some((f) => f.id === id)) {
      if (filmes.length < 5) {
        setFilmes([...filmes, newList]);
      } else {
        let list = filmes;
        list.shift();
        list.push(media);
        setFilmes(list);
      }
    } else if (media_type === "tv" && !series.some((s) => s.id === id)) {
      if (series.length < 5) {
        setSeries([...series, newList]);
      } else {
        let list = series;
        list.shift(); // Removes first item; oldest one.
        list.push(media);
        setSeries(list);
      }
    }
  }

  return (
    <VistoPorUltimoContext.Provider value={{ series, filmes, adicionarMidia }}>
      {children}
    </VistoPorUltimoContext.Provider>
  );
}
