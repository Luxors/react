import { Card } from './components/Card';

const produsts: Card[] = [
  {
    id: 1,
    consist: 'фуа-гра',
    quantity: 10,
    weight: '0,5',
    slogan: 'Печень утки разварная с артишоками.',
  },
  {
    id: 2,
    consist: 'рыбой',
    quantity: 40,
    gift: 2,
    weight: '2',
    slogan: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    id: 3,
    consist: 'курой',
    quantity: 100,
    gift: 5,
    weight: '5',
    isDisabled: true,
    slogan: '',
  },
];

function App() {
  return (
    <main className="app-layout">
      <section className="app-section">
        <h1 className="app-title">Ты сегодня покормил кота?</h1>
        <div className="app-content">
          {produsts.map((item) => (
            <Card key={item.id} card={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
