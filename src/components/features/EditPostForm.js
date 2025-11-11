import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import PostForm from './PostForm';
import { editPost, getPostById } from '../../postsRedux';

const EditPostForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector(state => getPostById(state, id));

  if (!post) return <Navigate to="/" />;

  const handleSubmit = updatedData => {
    dispatch(
      editPost({
        ...updatedData,
        id,
      })
    );
    navigate('/');
  };

  return (
    <PostForm
      action={handleSubmit}
      actionText="Edit post"
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
};

export default EditPostForm;
