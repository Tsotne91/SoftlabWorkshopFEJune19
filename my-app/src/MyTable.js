import {Button, Table} from "react-bootstrap";
import axios from "axios";

export default function MyTable({posts}) {

    return (
        <>
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Body</th>
               <th></th>
            </tr>

            </thead>
            <tbody>
            {
                posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td><Button
                            variant="danger"
                            onClick={() => {
                                axios.delete(`http://localhost:81/posts/${post.id}`)
                                    .then(() => window.location.reload())
                            }}
                        >Delete</Button></td>
                    </tr>
                        ))}
                    </tbody>
                </Table>
        </>)}