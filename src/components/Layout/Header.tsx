import React, { useState } from "react"
import { Dropdown, Layout } from "antd"
import { useSelector } from "react-redux"
import classes from "./Header.module.css"
import { DownOutlined } from "@ant-design/icons"
import Menu from "antd/lib/menu"
import { useProjectSlice, dummyUser } from "../../redux/project.reducer"
import { IUser } from "../../pages/users/types"
import {
    useGetProjectDataQuery,
    useGetProjectsByUserQuery,
} from "../../Api/projects"
import { IProjectSimpleDTO } from "../../types/Project.types"

const { Header: AntdHeader } = Layout

interface IMenu {
    projects: IProjectSimpleDTO[]
    onClick: (id: string) => void
    selectedProject: IProjectSimpleDTO | null
}

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
    const { data: activeProject } = useGetProjectDataQuery(activeProjectId)
    const user = dummyUser
    const { data: projects } = useGetProjectsByUserQuery(dummyUser._id)

    const handleClick = (id: string) => {
        console.log("set project", id)
        changeProject(id)
    }

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
                            {activeProject?.name || "Projects"} <DownOutlined />
                        </button>
                    </Dropdown>
                </div>
            </div>
        </AntdHeader>
    )
}

export default Header
