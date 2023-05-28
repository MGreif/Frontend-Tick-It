import React, { useEffect } from "react"
import {
    Form,
    Input,
    Button,
    InputNumber,
    DatePicker,
    AutoComplete,
    Select,
    ButtonProps,
} from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import classes from "./index.module.css"
import { useProjectSlice, dummyUser } from "../../redux/project.reducer"
import Label from "../Label"
import { IUser } from "../../pages/users/types"
import { ITicket } from "../../pages/tickets/types"
import moment from "moment"

const { TextArea } = Input
const { Option } = Select

interface ITicketFormProps {
    actionButtons: { label: string; onClick: any; buttonProps?: ButtonProps }[]
    initialData?: ITicket | undefined
}

const TicketForm = ({ actionButtons, initialData }: ITicketFormProps) => {
    const [form] = Form.useForm()
    const { activeProject } = useProjectSlice()

    const loggedInUser = dummyUser

    useEffect(() => {
        form.setFieldsValue({
            ...initialData,
            assignee: initialData?.assignee,
            labels: initialData?.labels?.map((label) => label._id),
            dateDue: initialData?.dateDue ? moment(initialData.dateDue) : null,
        })
    }, [initialData])
    if (!activeProject) return null

    return (
        <div>
            <Form layout="vertical" form={form}>
                <Form.Item
                    label="Title"
                    rules={[
                        { required: true, message: "Please input a title" },
                    ]}
                    name="title"
                >
                    <Input placeholder="Sample Ticket" />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <TextArea
                        onChange={(e) =>
                            form.setFieldsValue({
                                [e.target.name]: e.target.innerHTML,
                            })
                        }
                        placeholder="This is a sample ticket"
                        rows={7}
                        style={{ width: "100%" }}
                    />
                </Form.Item>
                <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item
                        label="Weight"
                        name="weight"
                        className={classes.tripleItem}
                    >
                        <InputNumber
                            addonBefore={<ExclamationCircleOutlined />}
                            placeholder="4"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Due Date"
                        name="dateDue"
                        className={classes.tripleItem}
                    >
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item
                        label="Assignee"
                        name="assignee"
                        className={classes.tripleItem}
                    >
                        <AutoComplete
                            defaultValue={form.getFieldValue("assignee")}
                            options={activeProject?.members.map((member) => ({
                                value: member._id,
                                label: member.name,
                            }))}
                            style={{ width: 200 }}
                            placeholder="Max Musterman"
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Labels" name="labels">
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        defaultValue={form.getFieldValue("labels")}
                        placeholder="Please Select the corresponding labels"
                    >
                        {activeProject.labels.map((label) => (
                            <Option
                                value={label._id}
                                title={label.name}
                                key={label._id}
                            >
                                <Label labelData={label} />
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item>
                    {actionButtons.map((button) => {
                        return (
                            <Button
                                type="primary"
                                key={button.label}
                                onClick={() =>
                                    button.onClick({
                                        ...form.getFieldsValue(),
                                        createdBy: loggedInUser?._id,
                                        relatedTickets: [], // TODO
                                        project: activeProject?._id,
                                        closed: false,
                                    })
                                }
                                {...(button.buttonProps || {})}
                            >
                                {button.label}
                            </Button>
                        )
                    })}
                </Form.Item>
            </Form>
        </div>
    )
}

export default TicketForm
