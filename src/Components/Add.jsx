import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const AddNote = ({ onAddCard }) => {
    const [note, setNote] = useState({ title: "", description: "", tagColor: "blue" });
    const [showForm, setShowForm] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        onAddCard(note.title, note.description, "", note.tagColor);
        setNote({ title: "", description: "", tagColor: "blue" });
        setShowForm(false);
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="relative">
            <button 
                className="bg-zinc-900/90 text-white hover:bg-zinc-800"
                style={{
                    position: 'fixed',
                    right: '30px',
                    top: '30px',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    fontSize: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: '1000',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}
                onClick={() => setShowForm(!showForm)}
            >
                +
            </button>
            
            {showForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1001]">
                    <div className="bg-zinc-900/90 text-white p-8 rounded-[45px] w-[90vw] max-w-[400px] relative">
                        <button 
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full transition-colors"
                            onClick={() => setShowForm(false)}
                        >
                            <IoClose size={20} />
                        </button>
                        <h1 className='text-xl mb-6 text-center'>Add your notes here:</h1>
                        <form>
                            <div className="mb-4">
                                <input 
                                    type="text" 
                                    className="w-full bg-zinc-800 text-white rounded-lg p-3" 
                                    placeholder='Title here:' 
                                    name='title' 
                                    onChange={onChange} 
                                    value={note.title} 
                                    minLength={5} 
                                    required 
                                />
                            </div>
                            <div className="mb-4">
                                <input 
                                    type="text" 
                                    className="w-full bg-zinc-800 text-white rounded-lg p-3" 
                                    placeholder='Description here:' 
                                    name='description' 
                                    value={note.description} 
                                    onChange={onChange} 
                                    minLength={5} 
                                    required 
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm mb-2">Title Background Color:</label>
                                <div className="flex gap-2">
                                    <input 
                                        type="color" 
                                        name="tagColor"
                                        value={note.tagColor}
                                        onChange={onChange}
                                        className="w-12 h-12 rounded-lg cursor-pointer"
                                    />
                                    <div 
                                        className="flex-1 bg-zinc-800 rounded-lg p-3 flex items-center"
                                        style={{ backgroundColor: note.tagColor }}
                                    >
                                        <span className="text-white">Selected Color</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button 
                                    type="submit" 
                                    disabled={note.title.length < 5 || note.description.length < 5} 
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50" 
                                    onClick={handleClick}
                                >
                                    Add Note
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddNote;
