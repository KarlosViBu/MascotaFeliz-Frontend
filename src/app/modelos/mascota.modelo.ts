export class MascotaModelo{
    id?: string;
    especie?: string;
    nombre?: string;
    foto?: string;
    estado?: string = 'Pendiente';
    comentario?: string;
    usuarioId?: string;
    planId?: string;
}