import styles from './Cabecalho.module.css';
import logo from './logo_infomotor.png';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt= 'Logo InfoMotor'></img>
            <h3 className={styles.texto_cabecalho}>Informações para o seu veículo!</h3>
            <nav>
                <a className={styles.opc_consumo} href='./Consumo'>Consumo</a>
                <a className={styles.opc_troc} href='./TrocaDeOleo'>Troca de óleo</a>
            </nav>
        </header>
    )
}

export default Cabecalho;