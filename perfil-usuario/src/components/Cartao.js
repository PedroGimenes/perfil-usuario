import styles from './Cartao.module.css'

function Cartao(props){
    return(
        <div>
           <img src={props.imagem} alt="Imagem do Usuário"></img>
           <h2>Nome do Usuário: <b>{props.nome}</b></h2>
           <hr></hr>
           <p className={styles.perfil}>{props.descrição}</p>
        </div>
    )
}

export default Cartao