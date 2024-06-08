import { useState, useEffect } from "react";
import api from "./services/api";
import Table from "./table";

function App() {

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() =>{
    async function LoadSuppliers() {
      const response = await api.get('/suppliers');
      setSuppliers(response.data)
    }

    LoadSuppliers();
  }, [])

  return (
    <div>
      <Table suppliers={suppliers}>
        
      </Table>
    </div>
  );
}

export default App;
