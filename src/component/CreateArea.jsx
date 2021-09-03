import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from "react";
function CreateArea(props) {

    const [inputNote, setInputNote] = useState({
        title: "",
        content: ""
    })

    const [isExpanded, setIsExpanded] = useState(false)

    function handleOnChange(event) {
        const { name, value } = event.target
        setInputNote(preValue => {
            return {
                title: (name === "title") ? value : preValue.title,
                content: (name === "content") ? value : preValue.content,
            }
        })
    }

    function handleAddItem(event) {
        if (inputNote.title.length > 0 && inputNote.content.length > 0) {
            props.addItem(inputNote)
        }

        setInputNote({
            title: "",
            content: ""
        })
        event.preventDefault()
    }

    function handleOnFocusTitle(event) {
        if (!isExpanded) {
            setIsExpanded(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleAddItem} className="create-note">
                <input onChange={handleOnChange} onFocus={handleOnFocusTitle} value={inputNote.title} name="title" placeholder="Title" />
                <textarea hidden={!isExpanded} onChange={handleOnChange} value={inputNote.content} name="content" placeholder="Take a note..." rows="3" />
                <Zoom in={isExpanded}>
                    <Fab type="submit"> <AddIcon /> </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
