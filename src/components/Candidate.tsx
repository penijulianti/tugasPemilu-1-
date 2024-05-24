import { useState } from "react";

interface Candidate{
    id:number,
    nomor: number;
    foto: string;
    nama: string;
    angkatan: number;
}

export default function Candidate({ nomor, foto, nama, angkatan }) {
    const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
    return (
    <div className="candidate-card">
      <div className="candidate-number">{nomor}</div>
      <img src={foto} alt={nama} />
      <section>
        <h2>{nama}</h2>
        <h5 onClick={handleShowDetails} style={{ cursor: 'pointer', color: '#fff' }}>
          Selengkapnya
        </h5>
        {showDetails && <p>PUB Angkatan: {angkatan}</p>}
      </section>
    </div>
    );
  }
  