import { FavoritosProvider } from "../contexts/FavoritosProvider";
import { VistoPorUltimoProvider } from "../contexts/VistoPorUltimoProvider";

export function AppProvider({ children }) {
  return (
    <VistoPorUltimoProvider>
      <FavoritosProvider>{children}</FavoritosProvider>
    </VistoPorUltimoProvider>
  );
}
