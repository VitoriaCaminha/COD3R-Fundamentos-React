import "./App.css"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega></Mega>
            </Card>
            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={0}></Contador>
            </Card>
            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={4}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "fernando" }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: "fernando@email.com" }}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Gustavo" />
                    <FamiliaMembro nome="ana" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com parâmetro" color="#E8B71A">
                <ComParametro titulo="Nota do aluno" aluno="Pedro" nota="8.3" />
            </Card>
            <Card titulo="#01 - Primeiro" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>