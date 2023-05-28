import React, { useEffect } from "react"
import { Form, Input, Select } from "antd"
import { useProjectSlice } from "../../redux/project.reducer"
import { useForm } from "antd/lib/form/Form"
import Label from "../Label"

interface ICreateSubBoardForm {
    setInnerState: any
    innerState: any
    initialValues: any
}

const { Option } = Select

const CreateSubBoardForm = (props: ICreateSubBoardForm) => {
    const labels = useProjectSlice().activeProject?.labels

    const [form] = useForm()

    useEffect(() => {
        if (Object.keys(props.innerState).length === 0) {
            form.resetFields()
        }
    }, [props.innerState, form])

    return (
        <Form
            onValuesChange={(e) =>
                props.setInnerState({ ...props.innerState, ...e })
            }
            layout="vertical"
            form={form}
            initialValues={props.initialValues}
        >
            <Form.Item label="Name" name="name">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Filter criteria" name="filterCriteriaLabel">
                <Select
                    style={{ width: 180 }}
                    onChange={(value) =>
                        props.setInnerState({
                            ...props.innerState,
                            filterCriteriaLabel: value,
                        })
                    }
                >
                    {labels &&
                        labels.map((label) => (
                            <Option value={label._id} key={label._id}>
                                <Label labelData={label} />
                            </Option>
                        ))}
                </Select>
            </Form.Item>
            <Form.Item label="WIP-Limit" name="wipLimit">
                <Input placeholder="4" type="number" />
            </Form.Item>
        </Form>
    )
}

export default CreateSubBoardForm
