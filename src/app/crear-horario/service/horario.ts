export interface CursoHorario {
    codigoCurso:string,
    nombreCurso:string,
    horaInicio:string,
    horaFinal:string
}

export interface Horario {
    id?:string;
    carnetEstudiante:string,
    cursosAprobados: string[];
    cursos:CursoHorario[]
}
