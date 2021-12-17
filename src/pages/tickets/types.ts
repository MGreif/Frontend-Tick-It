import { ILabel } from "../labels/types";

export interface ITicket {
    _id: string,
    title: string,
    description: string,
    createdAt: Date,
    createdBy: string,
    updatedAt: Date,
    weight: number,
    dateDue: Date,
    assignee: string,
    labels: ILabel[],
    relatedTickets: ITicket[],
    project: string
  }
  