import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import styles from '../assets/styles/User.module.css';

export interface User {
  id: string;
  image: string;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: string;
  gender: string;
  birthDate?: string;
  address?: Record<string, any>;
}

export function User() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h2 className="app-section-title">
        {user.firstName} {user.lastName}
      </h2>
      <div className={styles.user}>
        <dl className={styles.info}>
          <dt className={styles.title}>Full name:</dt>
          <dd>
            {user.firstName} {user.maidenName} {user.lastName}
          </dd>
          <dt className={styles.title}>Age:</dt>
          <dd>{user.age} years old</dd>
          <dt className={styles.title}>Gender</dt>
          <dd>{user.gender}</dd>
          <dt className={styles.title}>BirthDate:</dt>
          <dd>{user.birthDate}</dd>
          <dt className={styles.title}>Address:</dt>
          <dd>
            {user.address?.address}, {user.address?.city}, {user.address?.state}
            , {user.address?.postalCode}
          </dd>
        </dl>
        <div>
          <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
        </div>
      </div>
    </section>
  );
}
