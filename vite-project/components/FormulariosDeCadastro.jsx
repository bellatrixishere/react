import { useState } from "react";
import InputField from "./imputField";
import Button from "./Button";

// Constantes para validações
const MIN_SENHA_LENGTH = 6;
const MAX_NUMERO = 1000;

function FormulariosDeCadastro() {
    // Estados do formulário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [numero, setNumero] = useState("");

    // Estados de controle da UI
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState(false);
    const [user, setUser] = useState(nome, email, senha); // Simulação de armazenamento do usuário

    // Handlers para mudança de valores dos campos
    const handleNomeChange = (e) => setNome(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleSenhaChange = (e) => setSenha(e.target.value);
    const handleNumeroChange = (e) => setNumero(e.target.value);

    // Função de validação do email
    const validarEmail = (email) => {
        if (!email.trim()) {
            return "O email é obrigatório.";
        }
        if (!EMAIL_REGEX.test(email)) {
            return "Digite um email válido.";
        }
        return null; // Sem erro



    // Função de validação do número
    const validarNumero = (numero) => {
        if (!numero.trim()) {
            return "O número é obrigatório.";
        }

        const numeroValor = parseInt(numero);
        if (isNaN(numeroValor)) {
            return "O número deve ser um valor numérico válido.";
        }

        if (numeroValor <= 0) {
            return "O número deve ser maior que zero.";
        }

        if (numeroValor > MAX_NUMERO) {
            return `O número deve ser menor ou igual a ${MAX_NUMERO}.`;
        }

        return null; // Sem erro
    };

    // Função de validação da senha
    const validarSenha = (senha) => {
        if (senha.length < MIN_SENHA_LENGTH) {
            return `A senha deve ter pelo menos ${MIN_SENHA_LENGTH} caracteres.`;
        }
        return null; // Sem erro
    };

    // Handler principal do formulário
    const handlesubmit = (e) => {
        e.preventDefault(); // Previne o reload da página

        // Limpa mensagens anteriores
        setErro("");
        setSucesso(false);

        // Verifica se usuário já está cadastrado
        if (user) {
            setErro("Usuário já cadastrado. Por favor, faça login.");
            return;
        }

        // Validações dos campos
        const erroNome = !nome.trim() ? "O nome é obrigatório." : null;
        const erroEmail = validarEmail(email);
        const erroNumero = validarNumero(numero);
        const erroSenha = validarSenha(senha);

        // Se houver algum erro, exibe e para execução
        if (erroNome) {
            setErro(erroNome);
            return;
        }
        if (erroEmail) {
            setErro(erroEmail);
            return;
        }
        if (erroNumero) {
            setErro(erroNumero);
            return;
        }
        if (erroSenha) {
            setErro(erroSenha);
            return;
        }

        // Se chegou aqui, todas as validações passaram
        setSucesso(true);
      

    return (
        <form onSubmit={handlesubmit}>
            {/* Mensagens de erro e sucesso */}
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {sucesso && <p style={{ color: "green" }}>Cadastro realizado com sucesso!</p>}

            
            {/* Campos do formulário */}
            <InputField
                label="Nome"
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setUser({ ...user, nome: e.target.value })}
            />


            <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <InputField
                label="Senha"
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setUser({ ...user, senha: e.target.value })}
            />

            <InputField
                label="Número"
                type="number"
                name="numero"
                placeholder="Digite seu número"
                value={numero}
                onChange={handleNumeroChange}
            />

            {/* Botão de submit */}
            <Button text="Cadastrar" />
        </form>
    );
}

export default FormulariosDeCadastro;

}}
