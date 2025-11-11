import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addPost } from '../../postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const generateId = () => Math.random().toString(36).slice(2, 9);

  const handleSubmit = event => {
    event.preventDefault();

    if (
      !title.trim() ||
      !author.trim() ||
      !publishedDate.trim() ||
      !shortDescription.trim() ||
      !content.trim()
    ) {
      return;
    }

    dispatch(
      addPost({
        id: generateId(),
        title: title.trim(),
        author: author.trim(),
        publishedDate: publishedDate.trim(),
        shortDescription: shortDescription.trim(),
        content: content.trim(),
      })
    );

    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Enter author"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control
          value={publishedDate}
          onChange={e => setPublishedDate(e.target.value)}
          placeholder="Enter publish date"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
          placeholder="Brief summary"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Write your article..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
  );
};

export default AddPostForm;
