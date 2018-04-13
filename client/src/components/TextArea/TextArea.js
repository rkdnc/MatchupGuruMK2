import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextArea = props => (
    <textarea
    className='textarea'
    rows={props.rows}
    name={props.name}
    value={props.value}
    onChange={props.handleInputChange}
    />
)
export default TextArea;