import { useEffect, useState } from 'react';
import axios from 'axios';

type Animal = {
  id: number;
  name: string;
  icon: string;
}



function App() {
  const [animals, setAnimals] = useState<Animal[]>([{ id: 0, name: "", icon: ""}])

  useEffect(() => {
    (
      async () => {
        const data = await axios.get("http://localhost:8080")
        setAnimals(data.data)
      }
    )()
  }, [])

  return (
    <div>
      {animals.map(animal => (
        <p key={animal.id}>
          <span>{animal.name}</span>
          <span>{animal.icon}</span>
        </p>
      ))}
    </div>
  );
}

export default App;
