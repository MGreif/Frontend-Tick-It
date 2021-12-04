export interface ISubBoard {
  filterCriteriaLabel: ILabel,
  title: string,
  wipLimit: number
}

export interface ITicket {
  title: string,
  description: string,
  creationDate: Date,
  createdBy: string,
  lastModified: Date,
  weight: number,
  dueDate: Date,
  assignee: String,
  labels: ILabel[],
  relatedTickets: ITicket[],
  project: string
}

export interface ILabel {
  name: string,
  description: string,
  color: string
}