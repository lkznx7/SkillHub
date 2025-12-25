import './css/SocialproofSection.css'

function SocialproofSection(){
    return(
        <section className="social-proof-section" id="SocialProofSection">
            <h2 className="section-title">Quem usa recomenda</h2>
            <div className="testimonials-grid">
                
                <div className="testimonial-card">
                    <p className="testimonial-text">
                        “A SkillHub me ajudou a organizar meus estudos e finalmente entender programação.”
                    </p>
                    
                    <div className="author-info">
                        <img src="" alt="Foto do João" className="author-img" />
                        <strong>João - Estudante</strong>
                    </div>
                </div>

                <div className="testimonial-card">
                    <p className="testimonial-text">
                        “Plataforma simples, direta e muito prática.”
                    </p>
                    
                    <div className="author-info">
                        <img src="" alt="Foto da Mariana" className="author-img" />
                        <strong>Mariana, iniciante em tech</strong>
                    </div>
                </div>

                <div className="testimonial-card">
                    <p className="testimonial-text">
                        “Finalmente um lugar que ensina o que o mercado pede.”
                    </p>
                    
                    <div className="author-info">
                        <img src="" alt="Foto do Lucas" className="author-img" />
                        <strong>Lucas, desenvolvedor júnior</strong>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default SocialproofSection;