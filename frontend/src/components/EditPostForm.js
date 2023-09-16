import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "./Editor";
import "../styles/EditPostForm.css";
import "../styles/index.css";

function EditPostForm() {

    const { id } = useParams();
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function editPost(e) {

        const data = new FormData();

        data.set("title", title);
        data.set("content", content);
        data.set("file", files[0]);
        e.preventDefault();

        const response = await fetch(`http://localhost:4000/post/${id}`, {
            method: "PUT",
            body: data,
            credentials: "include",
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title);
                setContent(data.content);
            })
    }, []);

    if (redirect) {
        return <Navigate to={ "/dashboard" } />
    }

    return (
        <div className="edit_post_form">
            <h1 className="edit_post_form_header">Edit your post</h1>
            <form onSubmit={ editPost }>
                <input type="text"  placeholder="Title" value={ title } onChange={ (e) => setTitle(e.target.value) }/>
                <input type="file"  onChange={ (e) => {setFiles(e.target.files)} } />

                <Editor value={ content } onChange={ setContent } />
                <button style={ { marginTop: "1.5rem" } }>Save</button>
            </form>
        </div>

    )
}

export default EditPostForm;
