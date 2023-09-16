import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";
import "../styles/CreatePostForm.css";
import "../styles/index.css";

function CreatePostForm() {
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(e) {

        const data = new FormData();

        data.set("title", title);
        data.set("content", content);
        data.set("file", files[0]);
        e.preventDefault();

        const response = await fetch("http://localhost:4000/post", {
            method: "POST",
            body: data,
            credentials: "include",
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={ "/" } />
    }

    return (
        <div className="create_post_form">
            <h1 className="create_post_form_header">Create a post!</h1>
            <form onSubmit={ createNewPost }>
                <input type="text"  placeholder="Title" value={ title } onChange={ (e) => setTitle(e.target.value) }/>
                <input type="file"  onChange={ (e) => {setFiles(e.target.files)} } />

                <Editor value={ content } onChange={ setContent } />
                <button style={ { marginTop: "1.5rem" } }>Create post</button>
            </form>
        </div>

    )
}

export default CreatePostForm;
