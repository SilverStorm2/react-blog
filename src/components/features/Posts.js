import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { getAllPosts, getPostsByCategory } from '../../postsRedux';
import { getAllCategories } from '../../categoriesRedux';
import dateToStr from '../../utils/dateToStr';

const Posts = ({ categoryId }) => {
  const posts = useSelector(state =>
    categoryId ? getPostsByCategory(state, categoryId) : getAllPosts(state)
  );
  const categories = useSelector(getAllCategories);

  const getCategoryName = id =>
    categories.find(category => category.id === id)?.name || 'Unknown';

  if (!posts || posts.length === 0) {
    return <p className="text-muted">No posts available yet.</p>;
  }

  return (
    <Row className="gy-4">
      {posts.map(post => (
        <Col key={post.id} xs={12} md={6} lg={4}>
          <Card className="h-100 post-card">
            <Card.Body className="d-flex flex-column">
              <Card.Title>{post.title}</Card.Title>
              <Card.Text className="mb-1">
                <strong>Author:</strong> {post.author}
              </Card.Text>
              <Card.Text className="mb-1">
                <strong>Published:</strong> {dateToStr(post.publishedDate)}
              </Card.Text>
              <Card.Text className="mb-3">
                <strong>Category:</strong> {getCategoryName(post.category)}
              </Card.Text>
              <Card.Text className="flex-grow-1">
                {post.shortDescription}
              </Card.Text>
              <div className="mt-3">
                <Button as={Link} to={`/post/${post.id}`} variant="primary">
                  Read more
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;

Posts.propTypes = {
  categoryId: PropTypes.string,
};
