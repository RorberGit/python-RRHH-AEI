import { useEffect } from "react";
import { useReduxEmpleado } from "../../../redux/hooks/useReduxEmpleado";
import { useState } from "react";

const useUpdateStore = (data) => {
  const [isStore, setIsStore] = useState(false);

  const store = useReduxEmpleado();

  useEffect(() => {
    //! Si data no null almacenar si no reiniciar el estatodo
    if (data) {
      store.create(data);
      setIsStore(true);
    } else {
      store.reset();
      setIsStore(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { isStore };
};

export default useUpdateStore;
