import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function page() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const fetchUserData = () => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {IsLoading
        ? "loading ..."
        : users.map((user: any) => (
            <div key={user.id}>
              {user.id == router.query.product_id ? user.name : ""}
            </div>
          ))}
    </div>
  );
}
