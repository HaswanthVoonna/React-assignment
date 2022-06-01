import { useState } from "react";
import {useStore} from './store'
import { Input , Button, Modal, Select, Row, Col } from 'antd';

const { Option } = Select;

const ProfileEdit = () => {
    const addUser = useStore(state => state.addUser);
    const user = useStore(state => state.user);

    const [name, setName] = useState(user["name"]);
    const [age, setAge] = useState(user["age"]);
    const [gender, setGender] = useState(user["gender"]);

    const [editname, setEditName] = useState(false);
    const [editage, setEditAge] = useState(false);
    const [editgender, setEditGender] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className = "display">
            <header>
                <Row type = "flex" align = "middle">
                    <Col span = {4}>
                        <label> Name : </label>
                    </Col>
                    <Col span = {14}>
                        <Input 
                            type = "text" 
                            value = {name}
                            disabled = {!editname}
                            onChange = {(e) => {setName(e.target.value)}}
                        />
                    </Col>
                    <Col span = {6}>
                        <Button onClick={(e) => setEditName(true)}> Edit Name </Button>
                    </Col>
                </Row>

                <br />

                <Row type = "flex" align = "middle">
                    <Col span = {4}>
                        <label> Age : </label>
                    </Col>
                    <Col span = {14}>
                        <Input 
                            type = "number" 
                            value = {age}
                            disabled = {!editage}
                            onChange = {(e) => {setAge(e.target.value)}}
                        />
                    </Col>
                    <Col span = {6}>
                        <Button onClick={(e) => setEditAge(true)}> Edit Age </Button>
                    </Col>
                </Row>

                <br />

                <Row type = "flex" align = "middle">
                    <Col span = {4}>
                        <label> Gender : </label>
                    </Col>
                    <Col span = {14}>
                        <Select
                            style={{ width: 327 }}
                            value = {gender}
                            disabled = {!editgender}
                            onChange = {(e) => {setGender(e)}}
                        >
                            <Option value = "Male"> Male </Option>
                            <Option value = "Female"> Female </Option>
                            <Option value = "Other"> Other </Option>
                        </Select>
                    </Col>
                    <Col span = {6}>
                        <Button onClick={(e) => setEditGender(true)}> Edit Gender </Button>
                    </Col>
                </Row>

                <br />

                <Button onClick = {(e) => {
                        addUser({name, age, gender});
                        setEditName(false);
                        setEditAge(false);
                        setEditGender(false);
                        }}> Save to Store </Button>

                <br />
                <br />

                <Button type = "primary" onClick = {showModal}> View Store Values </Button>
                <Modal title = "User Information" visible = {isModalVisible} onOk = {handleOk} onCancel = {handleCancel}>
                    <p> Name :  {user["name"]}</p>
                    <p> Age :   {user["age"]}</p>
                    <p> Gender : {user["gender"]}</p>
                </Modal>
            </header>
        </div>
      );
};
 
export default ProfileEdit;