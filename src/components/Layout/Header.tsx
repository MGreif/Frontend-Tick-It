import React, { useEffect } from "react"
import { Button, Dropdown, Input, Layout } from "antd"
import classes from "./Header.module.css"
import { DownOutlined } from "@ant-design/icons"
import Menu from "antd/lib/menu"
import { useGetProject, useProjectSlice } from "../../redux/project.reducer"
import {
    useCreateProjectMutation,
    useGetProjectDataQuery,
    useGetProjectsByUserQuery,
    useLazyGetProjectsByUserQuery,
} from "../../Api/projects"
import { IProjectSimpleDTO } from "../../types/Project.types"
import { useUserSlice } from "../../redux/user.reducer"
import { createStyles } from "@mantine/core"
import { Auth } from "../../Auth/Auth"
import { useDeleteUsersMutation } from "../../Api/users"
import GenerateModal from "../GenericModal"
import Label from "../Label"
import ProjectForm from "../ProjectForm"

const { Header: AntdHeader } = Layout

interface IMenu {
    projects: IProjectSimpleDTO[]
    onClick: (id: string) => void
    selectedProject: IProjectSimpleDTO | null
}

const useStyles = createStyles({
    nameContainer: {
        display: "flex",
        gap: "1em",
        marginRight: "1em",
        color: "white",
        alignItems: "center"
    }
})

const HeaderMenu = ({ projects, onClick, selectedProject }: IMenu) => {
    return (
        <Menu>
            {projects
                .filter(
                    (projectEntry: IProjectSimpleDTO) =>
                        projectEntry._id !== selectedProject?._id
                )
                .map((project) => (
                    <Menu.Item key={project._id as string}>
                        <button
                            className={classes.button}
                            onClick={() => onClick(project._id)}
                        >
                            {project.name}
                        </button>
                    </Menu.Item>
                ))}
        </Menu>
    )
}

const Header = () => {
    const { activeProjectId, changeProject } = useProjectSlice()
    const user = useUserSlice()
    const { classes: classes2 } = useStyles()
    const { data: projects } = useGetProjectsByUserQuery(user.loggedInUser?._id as string, { skip: !user.loggedInUser?._id})
    const project = useGetProject()
    const handleClick = (id: string) => {
        changeProject(id)
    }

    const [createProject, result] = useCreateProjectMutation()

    return (
        <AntdHeader>
            <div className={classes.headerContainer}>
                <div className={classes.dropdownContainer}>
                    <Dropdown
                        overlay={
                            <HeaderMenu
                                projects={projects || []}
                                onClick={handleClick}
                                selectedProject={
                                    projects?.find(
                                        (p) => p._id === activeProjectId
                                    ) || null
                                }
                            />
                        }
                        className={classes.projectDropdown}
                    >
                        <button
                            className={classes.button}
                            onClick={(e) => e.preventDefault()}
                        >
                            {project.activeProject?.name || "Projects"} <DownOutlined />
                        </button>
                    </Dropdown>
                    <GenerateModal title="Create new Project" buttonLabel="Create Project" actions={[{
                        label: "Create",
                        function: (content) => {
                            createProject({
                                name: content.name,
                                description: content.description,
                                createdBy: user.loggedInUser?._id,
                                members: [user.loggedInUser?._id as string]
                            }).then(() => {
                                project.refetch(project.activeProjectId as string)
                            })   
                        }
                    }]}
                    content={ProjectForm}
                    />
                </div>
                <div className={classes2.nameContainer}>
                        <span>
                            Logged in as:
                        </span>
                        <span>
                            {Auth.kc.tokenParsed?.name}
                        </span>
                        <Button onClick={Auth.logout}>LOGOUT</Button>
                </div>
            </div>
        </AntdHeader>
    )
}

export default Header
