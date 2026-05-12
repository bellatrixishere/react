import InputField from "./imputField";
import Button from "./Button";

function FormulariosDeCadastro() {
    return (
        <form>
            <InputField label="Nome" type="text" name="name" placeholder="Digite seu nome" />
            <InputField label="Email" type="email" name="email" placeholder="Digite seu email" />
            <InputField label="Senha" type="password" name="password" placeholder="Digite sua senha" /> 
            <Button text="Cadastrar" />
        </form>
    )
}

export default FormulariosDeCadastro
