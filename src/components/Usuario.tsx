import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    const { response }: any = await axios.get("http://localhost:4000/paquete");
    console.log(response);
  };

  const login = (): void => {
    setUser({
      uid: "ABC123",
      name: "Victor Sandon",
    });
  };

  return (
    <div>
      <h3>Usuario: useState</h3>
      <button className="btn" onClick={login}>
        Login
      </button>
      <ul></ul>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};
