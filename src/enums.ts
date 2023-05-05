enum StatusEnum {
    NotStarted = 'Not Started',
    InProgress = 'In Progress',
    Done = 'Done',
}

interface Task {
    id: string;
    status: StatusEnum;
}
console.log(StatusEnum.Done);
