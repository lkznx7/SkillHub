import '/home/lucas/ExReact/LP/src/components/css/HowitworksSection.css'
function HowitworksSection(){
    return(
        <section className="howitworks-section" id="HowitWorksSection">
            <div className="howitworks-header">
                <h2>Como Funciona a SkillHub</h2>
            </div>
            <ul className="steps-list">
                <li className="step-item">
                    <strong>1.</strong> Crie sua conta gratuitamente
                </li>
                <li className="step-item">
                    <strong>2.</strong> Escolha sua trilha de aprendizado
                </li>
                <li className="step-item">
                    <strong>3.</strong> Assista às aulas e pratique
                </li>
                <li className="step-item">
                    <strong>4.</strong> Evolua e acompanhe seu progresso
                </li>
            </ul>
        </section>
    )
}

export default HowitworksSection;