import './css/BenefitsSection.css'
function BenefitsSection(){
    return(
        <section className="benefits-container" id="BenefitsSection">
            <h2 className="section-title">Por que escolher nossa plataforma?</h2>
            <div className="benefits-grid">
                <div className="benefit-card">
                    <h3>Conteúdo direto ao ponto</h3>
                    <p>Nada de enrolação. Aulas focadas no que o mercado realmente pede.</p>
                </div>
                <div className="benefit-card">
                    <h3>Aprendizado prático</h3>
                    <p>Aprenda construindo projetos reais desde a primeira aula.</p>
                </div>
                <div className="benefit-card">
                    <h3>Evolução guiada</h3>
                    <p>Trilhas organizadas para você saber exatamente o que estudar.</p>
                </div>
                <div className="benefit-card">
                    <h3>Foco no mercado</h3>
                    <p>Prepare-se para vagas reais com desafios e projetos aplicáveis.</p>
                </div>
            </div>
        </section>
    )
}
export default BenefitsSection;