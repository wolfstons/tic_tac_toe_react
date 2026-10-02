import Mezo from "./Mezo";

interface tablaProps {
  tabla: string[];
  kattintas: (index: number) => void;
}

export default function Tabla({ tabla, kattintas }: tablaProps) {
  return (
    <div className="tabla">
      {tabla.map((value, index) => (
        <Mezo key={index} 
        jele={value} 
        index={index}
        kattintas={kattintas} />
      ))}
    </div>
  );
}
