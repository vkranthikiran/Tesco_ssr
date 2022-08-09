function ProductList({ products }) {
  return (
    <div>
      <div className="d-flex">
        {products.map((product) => {
          return (
            <div className="card">
              <div key={product.id}>
                <img src={product.imageURL} />
                <h4>{product.name}</h4>
                <small>{product.description}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
