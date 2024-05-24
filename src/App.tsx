import Card from "./components/Candidate";
import Header from "./components/Header";

const cand = [
  {
    id: 1,
    nama: "Azhari Fahreza",
    foto: "/Pas Foto_Azhari.jpg",
    nomor: 1,
    angkatan:20,
  },
  {
    id: 2,
    nama: "Peni Julianti",
    foto: "/Peni Julianti.jpg",
    nomor: 2,
    angkatan:20,
  }
];

function App() {
  return (
<>
<Header/>
<div className="card">
      <h1>Pemilihan Ketua PUB</h1>
      <div className="candidates-container">
        {cand.map(candidate => (
          <Card
            key={candidate.id}
            nomor={candidate.nomor}
            foto={candidate.foto}
            nama={candidate.nama}
            angkatan={candidate.angkatan}
          />
        ))}
      </div>
    </div>
</>

  )
}

export default App
