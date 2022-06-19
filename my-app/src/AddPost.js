import {Button, Modal, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export default function AddPost(props) {
    const initialValues = {
        userId: "",
        title: "",
        body: "",
    }
    const [formValues, setFormValues] = useState(initialValues);

    const changeHandler = (field) => {
        return (event) => {
            setFormValues({...formValues, [field]: event.target.value});
        }
    }
    const onSubmit = async () => {
       await axios.post("http://localhost:81/posts/", formValues);
       props.modalHandler();
       window.parent.reload();
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={props.modalHandler}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>user ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter User ID"
                                  value={formValues.userId}
                                 onChange={changeHandler("userId")}/>
                    <Form.Text/>
                    <Form.Label>title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title"
                                  value={formValues.title}
                                  onChange={changeHandler("title")}/>
                    <Form.Text/>
                    <Form.Label>body</Form.Label>
                    <Form.Control type="text" placeholder="Enter body"
                                  value={formValues.body}
                                  onChange={changeHandler("body")}/>
                    <Form.Text/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onSubmit}>Submit</Button>
            </Modal.Footer>
            <Modal.Footer>
                <Button onClick={props.modalHandler}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
