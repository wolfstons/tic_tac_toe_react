interface jatekAllasProps {
  lepes: number;
}

export default function JatekAllas({ lepes }: jatekAllasProps) {
  return (
    <div className="jatekAllas">
      <p className="allas">Játékos: {lepes % 2 === 0 ? "X" : "O"}</p>
      <p className="allas">Nyertes: Mindenki egy élményt nyert</p>
    </div>
  );
}
