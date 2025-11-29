import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCategoryById } from '../../categoriesRedux';
import Posts from '../features/Posts';

const CategoryPosts = () => {
  const { categoryId } = useParams();
  const category = useSelector(state => getCategoryById(state, categoryId));

  if (!category) return <Navigate to="/categories" />;

  return (
    <>
      <h1 className="mb-4">Category: {category.name}</h1>
      <Posts categoryId={categoryId} />
    </>
  );
};

export default CategoryPosts;
