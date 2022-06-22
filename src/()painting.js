import ReactDOM from 'react-dom';

const data = {
  id: 'id-1',
  url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
  title: 'Feathers. Art abstract',
  price: 500,
  author: {
    tag: 'ractapopulous',
    url: 'https://pixabay.com/users/ractapopulous-24766/',
  },
  quantity: 10,
};

const paintings = (
  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>
      Author: <a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>Price: {data.price} credits</p>
    {/* <p>Availability: {data.quantity} running out or in stock</p> */}
    <button type="button">Add to Basket</button>
  </div>
);

ReactDOM.render(paintings, document.querySelector('#root'));
