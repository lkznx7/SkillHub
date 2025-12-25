import { useNavigate } from 'react-router-dom';
import './css/CtaSection.css'
function CtaSection() {
    
        const navigate = useNavigate()
        const click = () => {
        navigate("/PageLogin")
    }

    return (
        <section className="cta-section">
            <div className="cta-container">
                <h2 className="cta-headline">
                    Pronto para dar o próximo passo na sua carreira?
                </h2>
                
                <p className="cta-text">
                    Acesse agora a SkillHub e comece sua jornada na tecnologia.
                </p>
                
                <button onClick={click}>
                    Acessar a plataforma
                </button>
            </div>
        </section>
    );
}

export default CtaSection;