import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "product1" },
  { id: "p2", title: "product2" },
  { id: "p3", title: "product3" },
];

export default function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            {/* -----Absolute path-------*/}

            {/* <Link to={`products/${prod.id}`}>{prod.title}</Link> */}

            {/* ------Relative Path--------- */}
            <Link to={prod.id} >{prod.title}</Link>

          </li>
        ))}
      </ul>
    </>
  );
}
