import { useState } from "react"
import InputField from "./InputField"
import Button from "./Button"

function FormularioCadastro() {
    const [validacao, setValidacao] = useState({ erro: '', sucesso: false })
    const [user, setUser] = useState({ nome: '', email: '', telefone: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setValidacao({ erro: '', sucesso: false })

        if (user.nome.trim() === '') {
            setValidacao({ erro: 'Por favor, informe o nome.', sucesso: false })
            return
        }

        if (user.telefone.trim().length !== 11) {
            setValidacao({ erro: 'O telefone deve ter 11 dígitos.', sucesso: false })
            return
        }

        try {
            const resposta = await fetch('http://localhost:3000/registros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            if (!resposta.ok) {
                const erroJson = await resposta.json()
                setValidacao({ erro: erroJson.erro || 'Erro ao enviar o formulário.', sucesso: false })
                return
            }

            setValidacao({ erro: '', sucesso: true })
        } catch (error) {
            setValidacao({ erro: 'Falha na conexão com o servidor.', sucesso: false })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {validacao.erro && <p style={{ color: 'red' }}>{validacao.erro}</p>}
            {validacao.sucesso && <p style={{ color: 'green' }}>Cadastrado com sucesso</p>}

            <InputField
                label="Nome"
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={user.nome}
                onChange={(e) => setUser((dados) => ({ ...dados, nome: e.target.value }))}
            />

            <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="email@empresa.com"
                value={user.email}
                onChange={(e) => setUser((dados) => ({ ...dados, email: e.target.value }))}
            />

            <InputField
                label="Telefone"
                type="tel"
                name="telefone"
                placeholder="Digite seu número"
                value={user.telefone}
                onChange={(e) => setUser((dados) => ({ ...dados, telefone: e.target.value }))}
            />

            <InputField
                label="Nascimento"
                type="date"
                name="data"
            />

            <InputField
                label="Masculino"
                type="checkbox"
                name="masculino"
            />

            <InputField
                label="Feminino"
                type="checkbox"
                name="feminino"
            />

            <InputField
                label="Indeterminado"
                type="checkbox"
                name="indeterminado"
            />

            <Button text="Cadastrar" />

            <div>
                <p>Nome do usuário: {user.nome}</p>
            </div>
        </form>
    )
}

export default FormularioCadastro