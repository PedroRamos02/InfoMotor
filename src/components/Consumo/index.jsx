import { useState } from 'react';
import style from './Consumo.module.css';
import ModalInfo from '../Modal/ModalInfo';
import ModalAtencao from '../Modal/ModalAtencao';

function Consumo() {

    const [valor, setValor] = useState("");

    function handleChange(event) {
        console.log('event 1', event.target.name)
        console.log('event 2', event.target.value)
        setValor({ ...valor, [event.target.name]: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault()
        if ((!valor.media_consumo && !valor.distancia && !valor.preco) || !valor.media_consumo || !valor.distancia || !valor.preco) {
            ModalAtencao('Valores inválidos, preencha todos os campos corretamente.');
        } else {
            const calculoConsumo = (valor.distancia / valor.media_consumo).toFixed(2);
            const precoConsumo = (calculoConsumo * valor.preco).toFixed(2);
            ModalInfo('O veículo irá consumir ' + calculoConsumo + ' litros durante o trajedo, custando cerca de '+ precoConsumo +' reais')
        }
    }

    return (
        <>
            <div className={style.tabela_consumo}>
                <h2>Calcule o consumo de seu veículo</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="media_consumo">Média de autonomia do veículo por litro</label>
                    <input type="number" min="0" max="100" step=".01" id="media_consumo" onChange={handleChange} name="media_consumo"/>

                    <label htmlFor="distancia">Distancia percorrida</label>
                    <input type="number" min="0" max="100" step=".01" id="distancia" onChange={handleChange} name="distancia" />

                    <label htmlFor="valor">Valor do combustível</label>
                    <input type="number" min="0" max="100" step=".01" id="preco" onChange={handleChange} name="preco" />

                    <button>Calcular</button>
                </form>
            </div>
        </>
    )
}

export default Consumo;