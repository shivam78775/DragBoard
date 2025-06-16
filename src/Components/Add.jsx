import React, { useContext, useState } from 'react';
import noteContext from '../Context/Notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added Successfully", "success")

    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className="container mt-3 mb-5 " id='addNote'>
                <h1 className='heading'>Add your notes here: </h1>
                <form>
                    <div className="mb-3 my-3 d-flex justify-content-center">
                        <input type="text" className="form-control" id="title" placeholder='Title here:' name='title' onChange={onChange} value={note.title} minLength={5} required />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <input type="text" className="form-control" id="description" placeholder='Description here:' name='description' value={note.description} onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <input type="text" className="form-control" id="tag" name='tag' placeholder='Tag here:' value={note.tag} onChange={onChange} minLength={5} required />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" disabled={note.title.length < 5 || note.description.length < 5} className="btn btn-primary " onClick={handleClick}>Add Note</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNote;
