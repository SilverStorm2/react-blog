import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../categoriesRedux';

const Categories = () => {
  const categories = useSelector(getAllCategories);

  if (!categories || categories.length === 0) {
    return <p className="text-muted">No categories available.</p>;
  }

  return (
    <>
      <h1 className="mb-4">Categories</h1>
      <ListGroup>
        {categories.map(category => (
          <ListGroup.Item
            key={category.id}
            as={Link}
            to={`/category/${category.id}`}
            action
          >
            {category.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Categories;
