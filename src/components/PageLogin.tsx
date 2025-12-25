import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '/home/lucas/ExReact/LP/src/components/css/PageLogin.css'; // Confirme se o caminho do CSS está certo

function PageLogin() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setsenha] = useState("");

    function LoginVerify(e: FormEvent) {
        e.preventDefault();
        const stringDoUsuario = localStorage.getItem("usuarioCadastrado");

        const usuarioReal = stringDoUsuario ? JSON.parse(stringDoUsuario) : null;

        console.log("Usuário salvo no banco:", usuarioReal);
        console.log("O que você digitou:", email, senha);

        if (usuarioReal && email === usuarioReal.email && senha === usuarioReal.senha) {
            navigate("/PageUser");
        } else {
            alert("Usuário ou senha incorretos!");
        }
    }

    return (
        <section className="login-container">
            <div className="login-side-visual">
                <div className="visual-content">
                    <h2>Continue sua jornada de aprendizado.</h2>
                    <p>Milhares de linhas de código te esperam.</p>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" 
                    alt="Coding" 
                    className="login-img"
                />
            </div>
            <div className="login-side-form">
                <div className="card-login">
                    <Link to="/" className="btn-back">← Voltar</Link>
                    <h1>Bem-vindo de volta</h1>
                    <p className="subtitle">Insira seus dados para acessar</p>
                    
                    <form onSubmit={LoginVerify}>
                        <div className="input-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                placeholder="Digite seu email cadastrado"
                                value={email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Senha</label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                value={senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setsenha(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-login">Entrar</button>
                    </form>

                    <p className="footer-login">
                        Não tem conta? <Link to="/PageRegistration">Crie agora</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
export default PageLogin;