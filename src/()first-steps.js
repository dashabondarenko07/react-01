import ReactDOM from 'react-dom';

const elem1 = <span>Ha-ho</span>;
const elem2 = <span>guigik</span>;

const elem = (
  <div>
    {elem1} {elem2}
  </div>
);

console.log(elem);

ReactDOM.render(elem, document.querySelector('#root'));
