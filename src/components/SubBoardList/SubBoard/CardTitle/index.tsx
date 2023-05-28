import React from "react"
import { ISubBoard } from "../../../types"
import classes from "./index.module.css"
import GenericModal from "../../../GenericModal"
import { DeleteOutlined } from "@ant-design/icons"
import { useDeleteSubBoard } from "../../../../hooks/subBoards/useDeleteSubBoard"
import Label from "../../../Label"
import { useSelector } from "react-redux"
import {
    IProjectRootState,
    useProjectSlice,
} from "../../../../redux/project.reducer"
import { ILabel } from "../../../../pages/labels/types"
import { useDeleteSubBoardMutation } from "../../../../Api/subboard"

interface ICardTitleProps {
    subBoardData: ISubBoard
    currentTicketAmount: number
    showDelete?: boolean
}

const CardTitle = ({
    subBoardData,
    currentTicketAmount,
    showDelete,
}: ICardTitleProps) => {
    const [deleteSubBoard] = useDeleteSubBoardMutation()
    const labels = useProjectSlice().activeProject?.labels || []
    const correspondingLabel = labels?.find(
        (label) => label._id === subBoardData.filterCriteriaLabel
    )

    return (
        <div className={classes.content}>
            {correspondingLabel && <Label labelData={correspondingLabel} />}
            <span>{subBoardData.name}</span>
            {showDelete && (
                <span>
                    <GenericModal
                        buttonLabel={<DeleteOutlined />}
                        title="Delete Board Tile"
                        content={() => (
                            <div>
                                Are you sure, that you want to delete the Board
                                Tile?
                            </div>
                        )}
                        actions={[
                            {
                                label: "Delete",
                                function: () =>
                                    deleteSubBoard(subBoardData._id),
                                buttonProps: {
                                    style: { color: "red", borderColor: "red" },
                                },
                            },
                        ]}
                        buttonProps={{
                            type: "dashed",
                            className: classes.deleteButton,
                            size: "middle",
                        }}
                    />
                    {subBoardData.wipLimit !== null && (
                        <span
                            className={
                                currentTicketAmount > subBoardData.wipLimit
                                    ? classes.overflow
                                    : ""
                            }
                        >
                            {currentTicketAmount} / {subBoardData.wipLimit}
                        </span>
                    )}
                </span>
            )}
        </div>
    )
}

export default CardTitle
