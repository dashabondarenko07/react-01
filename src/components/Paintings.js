export default function Paintings(props) {
  const {
    // key,
    imageUrl,
    title,
    price,
    authorTag,
    authorUrl,
    // quantity,
  } = props;

  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Price: {price} credits</p>
      {/* <p>Availability: {quantity} running out or in stock</p> */}
      <button type="button">Add to Basket</button>
    </div>
  );
}
