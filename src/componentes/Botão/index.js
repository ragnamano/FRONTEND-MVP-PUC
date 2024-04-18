import './Botão.css'

const Botão = (props) =>{

    return(
        <button className='botão'>
            {props.children}
        </button>
        
    )
}
export default Botão