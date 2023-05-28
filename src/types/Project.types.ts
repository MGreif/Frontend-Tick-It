import { ILabel } from "../pages/labels/types"
import { IBoard } from "./Board.types"
import { ITicket } from "../pages/tickets/types"
import { IUser } from "../pages/users/types"

export interface IProjectSimpleDTO {
    _id: string
    name: string
    description: string
    members: string[]
    createdBy: string
    __v: number
}

export type TProjectDTO = Omit<IProjectSimpleDTO, "members"> & {
    labels: ILabel[]
    boards: IBoard[]
    tickets: ITicket[]
    members: IUser[]
}
