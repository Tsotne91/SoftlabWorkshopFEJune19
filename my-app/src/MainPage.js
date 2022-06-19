import MyTable from "./MyTable";
import AddPost from "./AddPost"
import {useEffect, useState} from "react"
import axios from "axios";
import {Button} from "react-bootstrap";

export default function MainPage() {
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:81/posts")
            .then(res => setPosts(res.data))
            .catch(console.error)
    }, [])

    const modalHandler = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <Button variant="danger" onClick={modalHandler}>Add Post</Button>{' '}
            <MyTable posts={posts}/>
            <AddPost
                show={showModal}
                modalHandler={modalHandler}
            />
        </>
    )
}