import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const Editor = forwardRef(({ defaultValue = '', onTextChange }, ref) => {
  const { quill, quillRef } = useQuill({ theme: 'snow' });
  const defaultValueRef = useRef(defaultValue);
  const onTextChangeRef = useRef(onTextChange);

  useLayoutEffect(() => {
    defaultValueRef.current = defaultValue;
  }, [defaultValue]);

  useLayoutEffect(() => {
    onTextChangeRef.current = onTextChange;
  }, [onTextChange]);

  useEffect(() => {
    if (!quill) return undefined;

    if (ref) {
      ref.current = quill;
    }

    if (defaultValueRef.current) {
      quill.clipboard.dangerouslyPasteHTML(defaultValueRef.current);
    }

    const handleTextChange = (...args) => {
      onTextChangeRef.current?.(...args);
    };

    quill.on('text-change', handleTextChange);

    return () => {
      quill.off('text-change', handleTextChange);
      if (ref) {
        ref.current = null;
      }
    };
  }, [quill, ref]);

  return <div ref={quillRef} />;
});

Editor.displayName = 'Editor';

Editor.propTypes = {
  defaultValue: PropTypes.string,
  onTextChange: PropTypes.func,
};

export default Editor;
