import {Link} from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* -----Absolute pathh-------
        
        <Link to="/products">List of products</Link>
         */}

         {/* ------Realative Path--------- */}

        Go to <Link to="products">the list of products</Link>
      </p>
    </>
  );
}