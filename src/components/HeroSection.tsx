import { useNavigate } from 'react-router-dom';
import '/home/lucas/ExReact/LP/src/components/css/HeroSection.css'
function HeroSection() {

    const navigate = useNavigate()
    const click = () => {
        navigate("/PageLogin")
    }
    return (
        <section className="hero-section" id="HeroSection">
            <div className="hero-image-container">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" alt="" />
            </div>
            <div className="hero-content">
                <div className="headline">
                    <h1>Aprenda tecnologia do jeito certo. Pratique. Evolua. Conquiste.</h1>
                </div>
                <div className="sub-headline">
                    <p>
                        Cursos práticos de programação, design e tecnologia para você sair do zero e entrar no mercado com confiança.
                    </p>
                </div>
                <button onClick={click}>
                    Acessar a plataforma
                </button>
            </div>
        </section>
    );
} export default HeroSection;