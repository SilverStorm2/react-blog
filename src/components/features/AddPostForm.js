import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostForm from './PostForm';
import { addPost } from '../../postsRedux';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const generateId = () => Math.random().toString(36).slice(2, 9);

  const handleSubmit = post => {
    dispatch(
      addPost({
        ...post,
        id: generateId(),
      })
    );
    navigate('/');
  };

  return <PostForm action={handleSubmit} actionText="Add post" />;
};

export default AddPostForm;
