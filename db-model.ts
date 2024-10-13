import db from "./db.ts";

type Task = {
    title: string
    description: string | null
    status: Status
    createdAt: Date | null
    updatedAt: Date | null
}

enum Status {
    'pending',
    'completed'
}

const showAllTasks = () => {
    try {
        db.exec(`SELECT * FROM tasks`);
    } catch (err) {
        console.error(err);
    }
};

const createTask = ()

export { showAllTasks };
