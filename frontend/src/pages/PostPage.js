import { useParams } from "react-router-dom";

function PostPage() {

    const { id } = useParams();

    return (
        <div>
            Post page brother
        </div>
    )
}

export default PostPage;
