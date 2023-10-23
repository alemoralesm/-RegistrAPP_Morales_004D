export interface Users{
    username: string;
    password: string;
    asignatura1: string;
    asignatura2: string;
    role: "usuario";
    isactive: true;
}

export interface Anuncios{
    titulo:string;
    fecha:Date;
    descripcion:string;
}