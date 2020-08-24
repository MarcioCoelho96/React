import React, {InputHTMLAttributes} from 'react';
//inputHTMLAttributes permite que o input receba todos os atributos
//que o input tradicional do html já recebe por padrão e assim podem
//ser utilizadas as propriedades padrão tambem

import './styles.css'


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;

}

const Input: React.FC<InputProps> = ({label, name, ...rest}) => { //se quiseres passar propriedade
    return(                                         //por propriedade onde tens props poes     
        <div className="input-block">               {/* o que identificas em interface(em cima) por exemplo ({label})*/}
            <label htmlFor={name}>{label} </label>    
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;