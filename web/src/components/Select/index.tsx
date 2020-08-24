import React, {SelectHTMLAttributes} from 'react';
//inputHTMLAttributes permite que o input receba todos os atributos
//que o input tradicional do html já recebe por padrão e assim podem
//ser utilizadas as propriedades padrão tambem

import './styles.css'


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{    /*Se fosse um array de numeros dentro das <> estaria number se fosse string estaria string */ 
        value:string;   /*mas como retorna um objecto dentro mete se os objectos que retorna o array*/
        label:string;
    }>;
}

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => { //se quiseres passar propriedade
    return(                                         //por propriedade onde tens props poes     
        <div className="select-block">               {/* o que identificas em interface(em cima) por exemplo ({label})*/}
            <label htmlFor={name}>{label} </label>    
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden >Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value} >{option.label}</option> /*o primeiro elemento no map precisa*/
                })}                                                                   {/*obrigatoriamente de uma propriedade chamada key */}
            </select>
        </div>
    );
}

export default Select;