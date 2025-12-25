import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/PageRegistration.css'; 

function PageRegistration() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = (e: FormEvent) => {
        e.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        if (formData.senha.length < 4) {
            alert("A senha precisa ter pelo menos 4 caracteres.");
            return;
        }

        localStorage.setItem("usuarioCadastrado", JSON.stringify(formData));
        
        console.log("Dados salvos:", formData);
        
        alert("Conta criada com sucesso! Seus dados foram salvos.");
        navigate('/PageLogin'); 
    };

    return (
        <section className="registration-container">
            
            <div className="reg-side-visual">
                <div className="visual-content">
                    <h2>Comece sua jornada hoje.</h2>
                    <p>Junte-se a comunidade SkillHub e transforme sua carreira.</p>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Futuristic Tech" 
                    className="reg-img"
                />
            </div>

            <div className="reg-side-form">
                <div className="card-reg">
                    <Link to="/" className="btn-back">← Voltar para Home</Link>
                    
                    <h1>Crie sua conta</h1>
                    <p className="subtitle">Preencha seus dados para começar</p>
                    
                    <form onSubmit={handleRegister}>
                        
                        <div className="input-group">
                            <label>Nome Completo</label>
                            <input 
                                type="text" 
                                name="nome"
                                placeholder="Ex: Lucas Silva"
                                value={formData.nome}
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="seu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Senha</label>
                            <input 
                                type="password" 
                                name="senha"
                                placeholder="••••••••"
                                value={formData.senha}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Confirmar Senha</label>
                            <input 
                                type="password" 
                                name="confirmarSenha"
                                placeholder="••••••••"
                                value={formData.confirmarSenha}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-register">
                            Cadastrar-se
                        </button>
                    </form>

                    <p className="footer-reg">
                        Já tem uma conta? <Link to="/PageLogin">Fazer Login</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default PageRegistration;