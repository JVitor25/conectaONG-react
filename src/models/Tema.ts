import Postagem from "./Postagem";

interface Tema {
    id: number;
    tema: string;
    postagem?: Postagem | null;
}
export default Tema;