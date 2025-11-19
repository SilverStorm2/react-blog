import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import Editor from '../common/Editor';

const normalizeDate = value => {
  if (!value) return null;
  const parsedValue = value instanceof Date ? value : new Date(value);
  return Number.isNaN(parsedValue.getTime()) ? null : parsedValue;
};

const formatDateInputValue = date =>
  date ? date.toISOString().split('T')[0] : '';

const PostForm = ({ action, actionText, ...props }) => {
  const {
    title: initialTitle = '',
    author: initialAuthor = '',
    publishedDate: initialPublishedDate = null,
    shortDescription: initialShortDescription = '',
    content: initialContent = '',
  } = props;

  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [publishedDate, setPublishedDate] = useState(() =>
    normalizeDate(initialPublishedDate)
  );
  const [shortDescription, setShortDescription] = useState(
    initialShortDescription
  );
  const [content, setContent] = useState(initialContent);
  const quillRef = useRef(null);

  const handleTextChange = () => {
    if (quillRef.current) {
      setContent(quillRef.current.root.innerHTML);
    }
  };

  const handleDateChange = event => {
    const { value } = event.target;
    setPublishedDate(value ? new Date(value) : null);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const editorHtml = quillRef.current
      ? quillRef.current.root.innerHTML
      : content;

    const payload = {
      title: title.trim(),
      author: author.trim(),
      publishedDate,
      shortDescription: shortDescription.trim(),
      content: editorHtml.trim(),
    };

    const hasEmptyField =
      payload.title === '' ||
      payload.author === '' ||
      !payload.publishedDate ||
      payload.shortDescription === '';

    const plainContent = quillRef.current
      ? quillRef.current.getText().trim()
      : editorHtml.replace(/<[^>]*>/g, '').trim();

    if (hasEmptyField || plainContent === '') return;

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
          type="date"
          value={formatDateInputValue(publishedDate)}
          onChange={handleDateChange}
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
        <Editor
          ref={quillRef}
          defaultValue={initialContent}
          onTextChange={handleTextChange}
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
  publishedDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;
