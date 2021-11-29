import React, { Component } from 'react';
import './estilo.css'

import biscoito from './imagens/biscoito.png' ;
import biblia from './imagens/biblia.png' ;

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Embora esteja nas alturas, o Senhor olha para os humildes, e de longe reconhece os arrogantes. Salmos 138:6', 
        'No princípio, era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus" (João 1:1). ', 
 'Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós? Romanos 8:31 ', 
 'Bendiga o Senhor a minha alma! Não esqueça nenhuma de suas bênçãos! Salmos 103:2 ',
 'O Senhor lutará por vocês; tão somente acalmem-se. Êxodo 14:14',
 'Até aqui o Senhor nos ajudou".1 Samuel 7:12b ',
 'Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.Salmos 46:1',
 'Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio.Salmos 91:2b' ];

    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
        this.setState(state);

    }

    render(){
        return(
            <div className="container">
                <h1 className="titulo"> Uma mensagem de Deus Para Você!</h1>

                <img src={biblia} className="img" />
                <Botao nome="Abrir Mensagem" acaoBtn={this.quebraBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>         
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
            </div>
        );
    }
}



export default App;