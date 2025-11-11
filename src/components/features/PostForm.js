import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = event => {
    event.preventDefault();

    const payload = {
      title: title.trim(),
      author: author.trim(),
      publishedDate: publishedDate.trim(),
      shortDescription: shortDescription.trim(),
      content: content.trim(),
    };

    if (Object.values(payload).some(value => value === '')) return;

    action(payload);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="postFormTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter title"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="postFormAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Enter author"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="postFormPublished">
        <Form.Label>Published</Form.Label>
        <Form.Control
          value={publishedDate}
          onChange={e => setPublishedDate(e.target.value)}
          placeholder="Enter publish date"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="postFormShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
          placeholder="Brief summary"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="postFormContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Write your article..."
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;
