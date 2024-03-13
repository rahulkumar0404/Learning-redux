import ProductItem from './ProductItem.jsx';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Shoe',
    description: 'This is a first product - amazing!',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My First Book',
    description: 'This is a first product - amazing!',
  },
  {
    id: 'p3',
    price: 4,
    title: 'My First Pants',
    description: 'This is a first product - amazing!',
  },
  {
    id: 'p4',
    price: 3,
    title: 'My First Shirt',
    description: 'This is a first product - amazing!',
  },
];
const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy Your favourite products</h2>

      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
