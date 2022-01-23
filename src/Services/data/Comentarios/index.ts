import { IComentData } from "interface/comentario.interface";
import api from "Services/api";

class ComentariosData{
    index(){
        return api.post<IComentData>('/comentarios')
    }
}

export default new ComentariosData()