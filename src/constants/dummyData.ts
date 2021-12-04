import { ILabel, ISubBoard, ITicket } from "../components/types"

const AVAILABLE_LABELS: ILabel[] = [
    {
        name: 'Label_1',
        description: 'Test Label 1',
        color: '#FA1234'
    },
    {
        name: 'Label_2',
        description: 'Test Label 2',
        color: '#FA1234'
    },
    {
        name: 'Label_3',
        description: 'Test Label 3',
        color: '#FA1234'
    },
    {
        name: 'Important',
        description: 'WICHTIG',
        color: '#A21FAE'
    }
]

const SUB_BOARDS: ISubBoard[] = [
    {
        filterCriteriaLabel: AVAILABLE_LABELS[0],
        title: 'ToDo',
        wipLimit: 4
    },
    {
        filterCriteriaLabel: AVAILABLE_LABELS[1],
        title: 'Doing',
        wipLimit: 4
    },
    {
        filterCriteriaLabel: AVAILABLE_LABELS[2],
        title: 'Done',
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
        labels: [AVAILABLE_LABELS[0]],
        createdBy: "Mika ID",
        relatedTickets: [],
        project: "Tick it ID"
    },
    {
        title: 'Test Ticket 2',
        description: 'This is my second ticket',
        creationDate: new Date(),
        lastModified: new Date(0),
        weight: 10,
        dueDate: new Date(0),
        assignee: 'Mika TODO',
        labels: [AVAILABLE_LABELS[1]],
        createdBy: "Mika ID",
        relatedTickets: [],
        project: "Tick it ID"
    },
    {
        title: 'Test Ticket 3',
        description: 'This is my third ticket',
        creationDate: new Date(),
        lastModified: new Date(0),
        weight: 10,
        dueDate: new Date(0),
        assignee: 'Mika TODO',
        labels: [AVAILABLE_LABELS[1]],
        createdBy: "Mika ID",
        relatedTickets: [],
        project: "Tick it ID"
    },
    {
        title: 'Test Ticket 4',
        description: 'This is my fourth ticket',
        creationDate: new Date(),
        lastModified: new Date(0),
        weight: 10,
        dueDate: new Date(0),
        assignee: 'Mika TODO',
        labels: [AVAILABLE_LABELS[2], AVAILABLE_LABELS[3]],
        createdBy: "Kevin ID",
        relatedTickets: [],
        project: "Tick it ID"
    }
]



export { BOARDS, TICKETS }