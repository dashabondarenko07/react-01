import paintings from './paintings.json';
import Paintings from './components/Paintings';

export default function App() {
  return (
    <div>
      <Paintings
        // key={paintings.id}
        imageUrl={paintings.url}
        title={paintings.title}
        price={paintings.price}
        authorTag={paintings.author.tag}
        authorUrl={paintings.author.url}
        // quantity={paintings.quantity}
      />
    </div>
  );
}
