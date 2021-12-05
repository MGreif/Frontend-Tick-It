import { ILabel } from "../labels/types";

export interface ITicket {
    title: string,
    description: string,
    creationDate: Date,
    createdBy: string,
    lastModified: Date,
    weight: number,
    dueDate: Date,
    assignee: string,
    labels: ILabel[],
    relatedTickets: ITicket[],
    project: string
  }
  