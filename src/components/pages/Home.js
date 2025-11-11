import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Posts from '../features/Posts';

const Home = () => {
  return (
    <>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-4">
        <h1 className="mb-3 mb-sm-0">All posts</h1>
        <Button as={Link} to="/post/add" variant="outline-primary">
          Add post
        </Button>
      </div>
      <Posts />
    </>
  );
};

export default Home;
