import React from 'react'
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css'

interface PageHeaderProps{
    title: string; /*caso não seja obrigatorio colocar 
                        "?" antes dos dois pontos*/
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => { /*funcção escrita no formato de constante*/
    return(
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to ="/">
                        <img src={backIcon} alt="back"/> {/*icone voltar*/}
                    </Link>
                        <img src={logoImg} alt="Logotipopequeno"/>
                </div>
                <div className="header-content"> 
                    <strong>{props.title}</strong>
                    {props.description && <p>{props.description}</p>} {/* quando tens um and, dois && a segunda parte so é executada
                                                                            se a primeira estiver alguma coisa se estiver vazia não executa nada*/}
                    {props.children}
                </div>
                
            </header>
    );
}

export default PageHeader;