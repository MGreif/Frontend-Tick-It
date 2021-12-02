import { ILabel, ISubBoard, ITicket } from "../components/types"

const AVAILABLE_LABELS: ILabel[] = [
    {
        name: 'Label_1',
        description: 'Test Label 1',
        Color: '#FA1234'
    },
    {
        name: 'Label_2',
        description: 'Test Label 2',
        Color: '#FA1234'
    },
    {
        name: 'Label_3',
        description: 'Test Label 3',
        Color: '#FA1234'
    }
]

const SUB_BOARDS: ISubBoard[] = [
    {
        filterCriteriaLabel: AVAILABLE_LABELS[0],
        title: 'Currently in Progress',
        wipLimit: 4
    },
    {
        filterCriteriaLabel: AVAILABLE_LABELS[1],
        title: 'Currently in Progress',
        wipLimit: 4
    },
    {
        filterCriteriaLabel: AVAILABLE_LABELS[2],
        title: 'Currently in Progress',
        wipLimit: 4
    }
]



const BOARDS = [
    {
        subBoards: SUB_BOARDS
    }
]

const TICKETS: ITicket[] = [
    {
        title: 'Test Ticket 1',
        description: 'This is my first ticket',
        creationDate: new Date(),
        lastModified: new Date(0),
        weight: 10,
        dueDate: new Date(0),
        assignee: 'Mika TODO',
        labels: [AVAILABLE_LABELS[0]]
    },
    {
        title: 'Test Ticket 2',
        description: 'This is my first ticket',
        creationDate: new Date(),
        lastModified: new Date(0),
        weight: 10,
        dueDate: new Date(0),
        assignee: 'Mika TODO',
        labels: [AVAILABLE_LABELS[1]]
    },
    {
        title: 'Test Ticket 3',
        description: 'This is my first ticket',
        creationDate: new Date(),
        lastModified: new Date(0),
        weight: 10,
        dueDate: new Date(0),
        assignee: 'Mika TODO',
        labels: [AVAILABLE_LABELS[1]]
    },
    {
        title: 'Test Ticket 4',
        description: 'This is my first ticket',
        creationDate: new Date(),
        lastModified: new Date(0),
        weight: 10,
        dueDate: new Date(0),
        assignee: 'Mika TODO',
        labels: [AVAILABLE_LABELS[2]]
    }
]



export { BOARDS, TICKETS }