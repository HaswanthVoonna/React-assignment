import { useHistory } from "react-router-dom";
import { useStore } from './store'
import { Input , InputNumber, Button, Select, Form } from 'antd';

const { Option } = Select;

const OnBoarding = () => {
    const addUser = useStore(state => state.addUser);
    const user = useStore(state => state.user);

    const history = useHistory();

    const handleSubmit = (values) => {
        addUser(values);
        history.push('/edit');
    };

    return (
        <div className = "create">
            <Form name = "basic" labelCol = {{ span: 8 }} wrapperCol = {{ span: 16 }} initialValues = {{ remember: true }}
                onFinish = { handleSubmit } autoComplete = "off">

                <Form.Item label = "Name" name = "name" rules = {[
                    { required : true, message : 'Please input your name!' }]}>
                    <Input/>
                </Form.Item>

                <Form.Item label = "Age" name = "age" rules = {[
                    { required : true, message : 'Please input your age!' }]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item label = "Gender" name = "gender" rules={[
                    { required: true, message : 'Please input your gender!'}]}>
                    <Select>
                        <Option value = "Male"> Male </Option>
                        <Option value = "Female"> Female </Option>
                        <Option value = "Other"> Other </Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol = {{ offset : 8, span : 16}}>
                    <Button type = "primary" htmlType = "submit"> Continue </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default OnBoarding;

