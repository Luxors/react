import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import styles from '../assets/styles/Home.module.css';

import type { User } from './User';

export function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentSort, setCurrentSort] = useState<string>('firstName');
  const [currentSortDir, setCurrentSortDir] = useState<string>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLength] = useState<number>(10);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setUsers(response.data.users);
    } catch (error) {
      console.error('Ошибка при запросе:', error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const usersSort = users
    .sort((a, b) => {
      let mod = 1;
      if (currentSortDir === 'desc') mod = -1;
      const sortKey = currentSort as keyof typeof a;

      if (a[sortKey] === undefined || b[sortKey] === undefined) return 0;

      if (a[sortKey] < b[sortKey]) return -1 * mod;
      if (a[sortKey] > b[sortKey]) return 1 * mod;
      return 0;
    })
    .filter((row, index) => {
      let start = (currentPage - 1) * pageLength;
      let end = currentPage * pageLength;
      return index >= start && index < end;
    });

  const sort = (evt: string) => {
    if (evt === currentSort) {
      setCurrentSortDir(currentSortDir === 'asc' ? 'desc' : 'asc');
    }
    setCurrentSort(evt);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage * pageLength < users.length)
      setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <section className={styles.users}>
        <h2 className="app-section-title">Users</h2>
        <div className={styles.container}>
          <table>
            <thead>
              <tr>
                <th onClick={() => sort('firstName')}>Name&#8595;</th>

                <th onClick={() => sort('firstName')}>Last name&#8595;</th>

                <th onClick={() => sort('firstName')}>Age&#8595;</th>

                <th onClick={() => sort('firstName')}>Gender&#8595;</th>
              </tr>
            </thead>

            <tbody>
              {usersSort.map((user) => (
                <tr key={user.id}>
                  <td>
                    <Link to={`/user/${user.id}`} className={styles.link}>
                      <img
                        src={user.image}
                        alt={`${user.firstName} ${user.lastName}`}
                        width="60"
                        height="60"
                      />
                      <span>{user.firstName}</span>
                    </Link>
                  </td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.debug}>
          <p>
            Debug: sort: {currentSort}, dir: {currentSortDir}
          </p>
          <p>
            page: {currentPage}, length: {pageLength}
          </p>
        </div>
        <footer className={styles.nav}>
          <button className="btn btn--primary" onClick={() => prevPage()}>
            &#8592;
          </button>
          <button className="btn btn--primary" onClick={() => nextPage()}>
            &#8594;
          </button>
        </footer>
      </section>
    </>
  );
}
