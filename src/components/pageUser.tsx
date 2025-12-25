import React from 'react';
import './css/PageUser.css'; 
import { Link } from 'react-router-dom';

function PageUser() {
    return (
        <div className="dashboard-layout">
            
            {/* BARRA LATERAL */}
            <aside className="sidebar">
                <div className="logo-area">
                    <h2>Skillhub</h2>
                </div>
                <nav className="menu">
                    <button className="active">🏠 Início</button>
                    <button>📚 Minhas Aulas</button>
                    <button>🏆 Certificados</button>
                    <button>⚙️ Configurações</button>
                    <Link to="/" className="logout-btn">Sair</Link>
                </nav>
            </aside>

            {/* CONTEÚDO PRINCIPAL */}
            <main className="main-content">
                
                <header className="user-header">
                    <div className="header-text">
                        <h1>Minhas Aulas</h1>
                        <p>Continue de onde parou, Lucas.</p>
                    </div>
                    <div className="user-avatar">
                        <img 
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" 
                            alt="Foto de perfil" 
                        />
                    </div>
                </header>

                <section className="courses-list">
                    
                    <div className="course-card">
                        <div className="card-left">
                            <div className="card-image" style={{color: '#6366f1'}}>
                                💻
                            </div>
                            <div className="card-info">
                                <h4>Desenvolvimento Full Stack</h4>
                                <p>Módulo 3: React Hooks</p>
                                <div className="progress-container">
                                    <div className="progress-bar">
                                        <div className="fill" style={{width: '75%'}}></div>
                                    </div>
                                    <span className="progress-text">75%</span>
                                </div>
                            </div>
                        </div>
                        <button className="btn-continue">Continuar Aula</button>
                    </div>
                    <div className="course-card">
                         <div className="card-left">
                            <div className="card-image" style={{color: '#10b981'}}>
                                🎨
                            </div>
                            <div className="card-info">
                                <h4>Introdução ao UI Design</h4>
                                <p>Módulo 1: Teoria das Cores</p>
                                <div className="progress-container">
                                    <div className="progress-bar">
                                        <div className="fill" style={{width: '30%'}}></div>
                                    </div>
                                    <span className="progress-text">30%</span>
                                </div>
                            </div>
                        </div>
                        <button className="btn-continue">Continuar Aula</button>
                    </div>

                     <div className="course-card">
                        <div className="card-left">
                            <div className="card-image" style={{color: '#f59e0b'}}>
                                🐍
                            </div>
                            <div className="card-info">
                                <h4>Python para Dados</h4>
                                <p>Módulo 5: Pandas</p>
                                <div className="progress-container">
                                    <div className="progress-bar">
                                        <div className="fill" style={{width: '10%'}}></div>
                                    </div>
                                    <span className="progress-text">10%</span>
                                </div>
                            </div>
                        </div>
                        <button className="btn-continue">Continuar Aula</button>
                    </div>

                </section>
            </main>
        </div>
    );
}

export default PageUser;