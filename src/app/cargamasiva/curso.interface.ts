export interface Curso {
    codigo:string;
    nombre: string;
    cursospre?:string[],
    creditos: string;
    creditospre?:string
}