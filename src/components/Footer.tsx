import '/home/lucas/ExReact/LP/src/components/css/footer.css'

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                
                <div className="footer-left-side">
                    <p>&copy; 2025 SkillHub</p>
                    <p className="footer-disclaimer">
                        Feito por <strong>lkdev</strong> — Projeto de estudo/ilustração
                    </p>
                </div>
                <ul className="footer-links">
                    <li><a href="#">Termos de uso</a></li>
                    <li><a href="#">Privacidade</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>

            </div>
        </footer>
    );
}

export default Footer;