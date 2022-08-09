export default function getData(req, products) {
  return new Promise((res) => {
    setTimeout(() => {
      res(
        products.filter((product) => {
          if (inCludeCheck(product.name, req)) {
            return product;
          }
        })
      );
    }, 500);
  });
}

function inCludeCheck(productDetailKey, searchKeyword) {
  return productDetailKey
    .toLocaleLowerCase()
    .includes(searchKeyword.toLocaleLowerCase());
}
