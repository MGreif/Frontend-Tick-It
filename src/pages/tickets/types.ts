import { ILabel } from "../labels/types";

export interface ITicket {
    title: string,
    description: string,
    createdAt: Date,
    createdBy: string,
    updatedAt: Date,
    weight: number,
    dueDate: Date,
    assignee: string,
    labels: ILabel[],
    relatedTickets: ITicket[],
    project: string
  }
  