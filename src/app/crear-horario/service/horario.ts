export interface dia{
    horaInicio:string,
    horaFinal:string,
    dia:string
}
export interface CursoHorario {
    codigoCurso:string,
    nombreCurso:string,
    dias:dia[]
}

export interface Horario {
    id?:string;
    correoEstudiante:string,
    cursos:CursoHorario[]
}
