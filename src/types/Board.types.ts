import { ISubBoard } from "../components/types";

export interface IBoard {
    _id: string,
    subBoards: ISubBoard[],
    name: string,
    project: string
  }