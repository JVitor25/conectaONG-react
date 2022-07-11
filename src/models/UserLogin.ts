interface UserLogin{
    id: number;
    nome: string;
    usuario: string;
    foto?: string|null;
    senha: string;
    token: string;
}

export default UserLogin;