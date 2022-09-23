import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
// import notes from "../notes";

// function Note(){
//     return (
//         <div className="note">
//             <h1>This is the note Title</h1>
//             <p>This is the note content</p>
//         </div>
//     );
// }

// function createNote(obj){
//     return (
//         <div className="note">
//             <h1>{obj.title}</h1>
//             <p>{obj.content}</p>
//         </div>
//     );
// }

// function Note(){
//     return (
//         notes.map(createNote)
//     );
// }

// function Note(){
//     return (
//         notes.map(obj => {
//             return (
//                 <div className="note">
//                     <h1>{obj.title}</h1>
//                     <p>{obj.content}</p>
//                 </div>
//             );
//         })
//     );
// }

function Note(props){
    function handleClick() {
        props.onDelete(props.id);
      }
    
      return (
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      );
}

export default Note;