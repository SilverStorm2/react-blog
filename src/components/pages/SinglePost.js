import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { getPostById, removePost } from '../../postsRedux';
import CancelPostModal from '../features/CancelPostModal';

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => getPostById(state, id));
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleRemovePostClick = () => {
    dispatch(removePost(id));
    setShowModal(false);
    navigate('/');
  };

  if (!post) return <Navigate to="/" />;

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h2>{post.title}</h2>
        </Col>
        <Col xs="auto" className="ms-auto">
          <Button
            as={Link}
            to={`/post/edit/${post.id}`}
            variant="outline-info"
            className="me-2"
          >
            Edit
          </Button>
          <Button variant="outline-danger" onClick={handleOpenModal}>
            Delete
          </Button>
        </Col>
      </Row>
      <article>
        <p>
          <strong>Author:</strong> {post.author}
        </p>
        <p>
          <strong>Published:</strong> {post.publishedDate}
        </p>
        <p>{post.content}</p>
      </article>
      <CancelPostModal
        show={showModal}
        onHide={handleCloseModal}
        handleRemovePostClick={handleRemovePostClick}
      />
    </>
  );
};

export default SinglePost;
