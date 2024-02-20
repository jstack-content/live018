import { useEffect, useState } from "react";
import { Form } from "./Form";
import { IUser } from "./IUser";
import { sleep } from "./lib/utils";

async function getUser() {
  await sleep(100);

  return {
    age: 26,
    city: 'Curitiba',
    name: 'Mateus Silva',
    street: 'Hoje não sequestrador',
    zipcode: '88',
  };
}

export function App() {
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    getUser()
      .then(data => {
        console.log('Terminou de buscar o user')
        setUser(data)
      });
  }, []);

  return (
    <Form user={user} />
  );
}
