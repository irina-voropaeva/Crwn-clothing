import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from "./category-preview.styles.jsx";

import ProductCard from "../../product-card/product-card.component";

import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryPreviewTitle as="h2">
        <Link to={title}>{title.toUpperCase()}</Link>
      </CategoryPreviewTitle>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
