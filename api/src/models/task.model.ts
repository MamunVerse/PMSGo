import mongoose, { Model, Schema } from 'mongoose';
import { TaskInterface } from '../interfaces/task.interface';

const DataSchema: Schema<TaskInterface> = new Schema({
    title: { type: String },
    description: { type: String },
    status: { type: String },
    userID: { type: Number },
    createdDate: { type: Date, default: Date.now() },
}, { versionKey: false });

const TaskModel: Model<TaskInterface> = mongoose.model<TaskInterface>('tasks', DataSchema);

export default TaskModel;