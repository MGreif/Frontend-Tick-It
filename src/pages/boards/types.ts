import { ISubBoard } from "../../components/types";

export interface IBoard {
    subBoards: ISubBoard[],
    name: string,
    project: string
  }