import React , {useContext, useState} from 'react'
import noteContext from '../context/notes/NoteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "" , tag: "default"})
    const handleClick= (e)=> {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }
    const onChange = (e)=> {
        setNote({...note, [e.target.id]: e.target.value})
    }
  return (
    <div>
      <div className='container my-3'>
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3" >
            <label htmlFor="title" className="form-label">Title</label><br />
            <input type="text" className="form-control" id="title" name = "title" aria-describedby="emailHelp" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label><br />
            <input type="text" className="form-control" id="description" name= "description" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Description</label><br />
            <input type="text" className="form-control" id="tag" name= "tag" onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
        <div className="container">
          <h2>Your Notes</h2>
        </div>
      </div>
    </div>
  )
}

export default AddNote

