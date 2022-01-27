import { ILabel } from "../labels/types";
import { IUser } from "../users/types";

export interface ITicket {
    _id: string,
    title: string,
    description: string,
    createdAt: Date,
    createdBy: IUser,
    updatedAt: Date,
    weight: number,
    dateDue: Date,
    assignee: string,
    labels: ILabel[],
    relatedTickets: ITicket[],
    project: string,
    closed: boolean
  }
  