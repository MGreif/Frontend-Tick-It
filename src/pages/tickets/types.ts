import { ISubBoard } from "../../components/types";
import { TUser } from "../../redux/user.reducer";
import { ILabel } from "../labels/types";
import { IUser } from "../users/types";

export interface ITicket {
    _id: string,
    title: string,
    description: string,
    createdAt: Date,
    createdBy: TUser,
    updatedAt: Date,
    weight: number,
    dateDue: Date,
    assignee: string,
    labels: ILabel[],
    relatedTickets: ITicket[],
    allocatedSubBoard: ISubBoard,
    project: string,
    closed: boolean
  }
  