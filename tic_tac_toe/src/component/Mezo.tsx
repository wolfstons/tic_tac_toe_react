interface mezoProps {
  jele: string,
  index:number,
  kattintas: (index:number) => void
}

export default function Mezo({ jele, kattintas,index }: mezoProps) {
  return (
    <button className="mezo" onClick={()=>kattintas(index)}>
      {jele}
    </button>
  );
}