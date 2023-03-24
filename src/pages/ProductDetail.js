import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();

  

  return (
    <>
      <h1>ProductDetailPage</h1>
      <p>{params.productId}</p>
      <p>
        {/* since product detail and products are siblings and not parent-child,
        going one step back will mean going back to the parent component viz- "root
        Therefore,to avoid that we can use relative path property of "Link" 
        the default of which is "route instead of path*/}
        <Link to=".." relative="path">
          Go Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
