import React, { useState } from "react"
import { Form, Input, Button } from "antd"
import { useProjectSlice } from "../../redux/project.reducer"
import { HuePicker } from "react-color"
import { buildRouterLink } from "../../libs/linkBuilder"
import { useCreateLabelMutation } from "../../Api/labels"
import { useNavigate } from "react-router-dom"

const { TextArea } = Input

interface ILabelFormProps {
    history: any
}

const LabelForm = ({ history }: ILabelFormProps) => {
    const [form] = Form.useForm()
    const { activeProject } = useProjectSlice()
    const [createLabel] = useCreateLabelMutation()
    const navigate = useNavigate()
    const [color, setColor] = useState("#ffffff")

    const handleColorChange = (color: any) => {
        setColor(color.hex)
    }

    const handleFinish = (fieldsValue: any) => {
        const data = {
            ...fieldsValue,
            project: activeProject?._id,
        }

        createLabel(data).then(() => navigate(buildRouterLink("/labels")))
    }

    if (!activeProject) return null

    return (
        <div>
            <Form layout="vertical" form={form} onFinish={handleFinish}>
                <Form.Item
                    label="Name"
                    rules={[
                        { required: true, message: "Please input a title" },
                    ]}
                    name="name"
                >
                    <Input placeholder="Sample Label" />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    initialValue=""
                >
                    <TextArea
                        placeholder="This is a sample Label"
                        rows={7}
                        style={{ width: "100%" }}
                    />
                </Form.Item>
                <Form.Item name="color" label="Color">
                    <HuePicker
                        color={color}
                        onChange={handleColorChange}
                        onChangeComplete={({ hex }: { hex: string }) =>
                            form.setFieldsValue({ color: hex })
                        }
                        width="100%"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LabelForm
