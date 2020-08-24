import React, {TextareaHTMLAttributes} from 'react';
//TextareaHTMLAttributes permite que o input receba todos os atributos
//que o input tradicional do html já recebe por padrão e assim podem
//ser utilizadas as propriedades padrão tambem

import './styles.css'


interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;

}

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => { //se quiseres passar propriedade
    return(                                         //por propriedade onde tens props poes     
        <div className="textarea-block">               {/* o que identificas em interface(em cima) por exemplo ({label})*/}
            <label htmlFor={name}>{label} </label>    
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;