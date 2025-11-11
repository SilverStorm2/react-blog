import { Modal, Button } from 'react-bootstrap';

const CancelPostModal = ({ show, onHide, handleRemovePostClick }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Header closeButton>
      <Modal.Title>Delete post</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Are you sure you want to remove this post? This action cannot be undone.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
      <Button variant="danger" onClick={handleRemovePostClick}>
        Remove
      </Button>
    </Modal.Footer>
  </Modal>
);

export default CancelPostModal;
