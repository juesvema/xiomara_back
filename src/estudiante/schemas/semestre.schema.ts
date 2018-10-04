import * as mongoose from 'mongoose';

export const semestreSchema = new mongoose.Schema({
    materias: Array,
    codigo_id: Number
}, {
    collection: 'semestre',
    timestamps: true
});