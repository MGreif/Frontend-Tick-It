import React, {
    ReactElement,
    useEffect,
    useLayoutEffect,
} from "react"
import { Button, Card } from "antd"
import {
    dummyUser,
    useProjectSlice,
} from "../../redux/project.reducer"
import GenericModal from "../../components/GenericModal"
import classes from "./Dashboard.module.css"
import ProjectForm from "../../components/ProjectForm"
import {
    useCreateProjectMutation,
    useGetProjectsByUserQuery,
    useLazyGetProjectDataQuery,
} from "../../Api/projects"
import { IProjectSimpleDTO } from "../../types/Project.types"
import { useNavigate } from "react-router-dom"

export const Dashboard: React.FC<any> = ({
    children,
}: {
    children: ReactElement
}) => {
    const user = dummyUser
    const { data: projects } = useGetProjectsByUserQuery(user._id || "")
    const [createProject, createdProject] = useCreateProjectMutation()
    const { changeProject, activeProject, activeProjectId } = useProjectSlice()
    const navigate = useNavigate()
    const [fetchProject, result] = useLazyGetProjectDataQuery()
    const handleClick = (project: IProjectSimpleDTO) => {
        fetchProject(project._id, true)
    }

    useLayoutEffect(() => {
        const activeProjectSS = window.sessionStorage.getItem("activeProject")
        if (activeProjectSS) {
            changeProject(activeProjectSS)
        }
    }, [])

    useEffect(() => {
        if (result.data) {
            changeProject(result.data?._id)
            window.sessionStorage.setItem("activeProject", result.data._id)
        }
    }, [result])

    if (activeProjectId) return null

    return (
        <div
            style={{
                zIndex: 10,
                position: "absolute",
                backgroundColor: "white",
                padding: "4em",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }}
        >
            <div className={classes.modal}>
                <GenericModal
                    title={"Create Project"}
                    content={ProjectForm}
                    buttonProps={{
                        size: "large",
                        style: {
                            fontSize: "20pt",
                            height: "auto",
                        },
                    }}
                    buttonLabel="Create Project"
                    actions={[
                        {
                            label: "Create",
                            function: (data: any) => {
                                createProject({
                                    ...data,
                                    members: [user?._id],
                                    createdBy: user?._id,
                                })
                            },
                        },
                    ]}
                />
            </div>
            <div className={classes.container}>
                {(projects || []).map((projectEntry) => (
                    <div className={classes.row} key={projectEntry._id}>
                        <Card
                            className={classes.card}
                            title={projectEntry.name}
                            actions={[
                                <Button
                                    type={
                                        activeProject?._id === projectEntry._id
                                            ? "primary"
                                            : "dashed"
                                    }
                                    onClick={() => handleClick(projectEntry)}
                                >
                                    {activeProject?._id === projectEntry._id
                                        ? "Selected!"
                                        : "Select"}
                                </Button>,
                            ]}
                        >
                            <span>{projectEntry.description}</span>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}
