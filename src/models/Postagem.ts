import Tema from "./Tema";
import User from "./User";

interface Postagem {
    id: number;
    titulo: string;
    mensagem: string;
    data: string;
    contato?: string | null;
    tema?: Tema | null;
    usuario?: User | null;
}
export default Postagem;