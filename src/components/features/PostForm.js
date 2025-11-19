import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
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
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const quillRef = useRef(null);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleTextChange = () => {
    if (!quillRef.current) return;
    const editorHtml = quillRef.current.root.innerHTML;
    const plainText = quillRef.current.getText().trim();

    setContent(editorHtml);
    if (plainText && contentError) {
      setContentError(false);
    }
  };

  const handleDateChange = event => {
    const { value } = event.target;
    const dateValue = value ? new Date(value) : null;
    setPublishedDate(dateValue);
    if (dateValue && dateError) {
      setDateError(false);
    }
  };

  const titleRegister = register('title', {
    required: 'Title is required',
    minLength: {
      value: 3,
      message: 'Title is too short (min is 3)',
    },
  });
  const authorRegister = register('author', {
    required: 'Author is required',
    minLength: {
      value: 3,
      message: 'Author is too short (min is 3)',
    },
  });
  const shortDescriptionRegister = register('shortDescription', {
    required: 'Short description is required',
    minLength: {
      value: 20,
      message: 'Short description is too short (min is 20)',
    },
  });

  const handleSubmit = () => {
    const editorHtml = quillRef.current
      ? quillRef.current.root.innerHTML
      : content;
    const plainContent = quillRef.current
      ? quillRef.current.getText().trim()
      : editorHtml.replace(/<[^>]*>/g, '').trim();

    const isContentValid = plainContent !== '';
    const isDateValid = Boolean(publishedDate);

    setContentError(!isContentValid);
    setDateError(!isDateValid);

    if (!isContentValid || !isDateValid) return;

    const payload = {
      title: title.trim(),
      author: author.trim(),
      publishedDate,
      shortDescription: shortDescription.trim(),
      content: editorHtml.trim(),
    };

    action(payload);
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" controlId="postFormTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...titleRegister}
          value={title}
          onChange={e => {
            titleRegister.onChange?.(e);
            setTitle(e.target.value);
          }}
          placeholder="Enter title"
        />
        {errors.title && (
          <small className="d-block form-text text-danger mt-2">
            {errors.title.message}
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="postFormAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...authorRegister}
          value={author}
          onChange={e => {
            authorRegister.onChange?.(e);
            setAuthor(e.target.value);
          }}
          placeholder="Enter author"
        />
        {errors.author && (
          <small className="d-block form-text text-danger mt-2">
            {errors.author.message}
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="postFormPublished">
        <Form.Label>Published</Form.Label>
        <Form.Control
          type="date"
          value={formatDateInputValue(publishedDate)}
          onChange={handleDateChange}
        />
        {dateError && (
          <small className="d-block form-text text-danger mt-2">
            Publication date is required
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="postFormShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...shortDescriptionRegister}
          as="textarea"
          rows={2}
          value={shortDescription}
          onChange={e => {
            shortDescriptionRegister.onChange?.(e);
            setShortDescription(e.target.value);
          }}
          placeholder="Brief summary"
        />
        {errors.shortDescription && (
          <small className="d-block form-text text-danger mt-2">
            {errors.shortDescription.message}
          </small>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="postFormContent">
        <Form.Label>Main content</Form.Label>
        <Editor
          ref={quillRef}
          defaultValue={initialContent}
          onTextChange={handleTextChange}
        />
        {contentError && (
          <small className="d-block form-text text-danger mt-2">
            Content can't be empty
          </small>
        )}
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
