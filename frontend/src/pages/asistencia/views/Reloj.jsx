import { useState } from "react";
import { useEffect } from "react";

//Componente para mostar un reloj en pantalla
export default function Reloj() {
  //Stado para el reloj
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mostrar el reloj centrado en pantalla */}
      <h2 style={{ textAlign: "center" }}>{time.toLocaleTimeString()}</h2>
    </>
  );
}
