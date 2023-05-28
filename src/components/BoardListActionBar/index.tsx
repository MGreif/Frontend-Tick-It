import React from "react"
import BoardSelection from "../BoardSelection"
import classes from "./index.module.css"
import GenericModal from "../GenericModal"
import CreateSubBoardForm from "./CreateSubBoardForm"
import { IBoard } from "../../types/Board.types"
import { useCreateSubBoardMutation } from "../../Api/subboard"

interface IBoardListActionBar {
    board: IBoard | null
    setBoard: any
}

const BoardListActionBar = ({ setBoard, board }: IBoardListActionBar) => {
    const [createSubBoard] = useCreateSubBoardMutation()
    return (
        <div>
            <BoardSelection setBoard={setBoard} board={board} />
            <GenericModal
                title="Create new Board Tile"
                buttonLabel="New Board Tile"
                actions={[
                    {
                        label: "Submit",
                        function: (data: any) => {
                            console.log(data)
                            createSubBoard({ data, boardId: board?._id || "" })
                        },
                    },
                ]}
                content={CreateSubBoardForm}
                buttonClass={classes.modalButton}
            />
        </div>
    )
}

export default BoardListActionBar
