import { useState } from "react";
import style from "./TrocaDeOleo.module.css"
import ModalAtencao from "../Modal/ModalAtencao";
import ModalCerto from "../Modal/ModalCerto";

function TrocaDeOleo() {

    let kmLimiteCarro = 3000;

    let kmLimiteMoto = 1000;

    const [checkedMoto, setCheckedMoto] = useState(false);

    const [checkedCarro, setCheckedCarro] = useState(false);

    const [valor, setValor] = useState ("");

    const handleChangeMoto = () => {
        setCheckedMoto(!checkedMoto);
        //console.log(checkedMoto)
    }

    const handleChangeCarro = () => {
        setCheckedCarro(!checkedCarro);
        //console.log(checkedCarro)
    }

    function handleChange(event){
        setValor({...valor, [event.target.name]: event.target.value});
        //console.log('event 1', event.target.name)
        //console.log('event 2', event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        if (!valor.distancia && checkedMoto == true && checkedCarro == true || checkedCarro == false && checkedMoto ==false)  {
            ModalAtencao('Valores inválidos, preencha os campos corretamente.');
        } else if(checkedMoto == true && checkedCarro == false){
            const calculoMoto = (kmLimiteMoto - valor.distancia);
            //console.log(calculoMoto);
            if(valor.distancia >= kmLimiteMoto) {
                ModalAtencao('O veículo já ultrapassou a quilometragem ideal para rodar com o mesmo óleo, a troca deve ser realizada o mais brevê possivel!')
            } else {
                ModalCerto('O veículo pode rodar ' + calculoMoto + ' quilometros antes da proxíma troca de óleo.');
            }
        } else if(checkedCarro == true && checkedMoto == false){
            const calculoCarro = (kmLimiteCarro - valor.distancia);
            if(valor.distancia >= kmLimiteCarro) {
                ModalAtencao('O veículo já ultrapassou a quilometragem ideal para rodar com o mesmo óleo, a troca deve ser realizada o mais brevê possivel!')
            } else {
                ModalCerto('O veículo pode rodar ' + calculoCarro + ' quilometros antes da proxíma troca de óleo.');
                
            }
        } else {
            ModalAtencao('Selecione apenas um veículo por vez.');
        }
        
    }

    return(
        <>
            <div className={style.tabela_troca}>
                
                <form onSubmit={handleSubmit}>
                    <label htmlFor="veiculo">Selecione o seu veículo</label>
                    <div className={style.opcoes}>
                        <input type="checkbox" className={style.botaoOpcoes} name="moto" value={checkedMoto} onChange={handleChangeMoto} />
                        <p>Moto</p>
                        <input type="checkbox" className={style.botaoOpcoes} name="carro" value={checkedCarro} onChange={handleChangeCarro} />
                        <p>Carro</p>
                    </div>

                    <label htmlFor="distancia">Quilometragem atual percorrida</label>
                    <input type="number" min="0" max="9999" id="distancia"  onChange={handleChange} name="distancia" />

                    <button>Calcular</button>
                </form>
            </div>
        </>
    )
}

export default TrocaDeOleo;