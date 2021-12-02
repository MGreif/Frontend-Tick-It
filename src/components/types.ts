export interface ISubBoard {
  filterCriteriaLabel: ILabel,
  title: string,
  wipLimit: number
}

export interface ITicket {
  title: string,
  description: string,
  creationDate: Date,
  lastModified: Date,
  weight: number,
  dueDate: Date,
  assignee: String,
  labels: ILabel[]
}

export interface ILabel {
  name: string,
  description: string,
  Color: string
}