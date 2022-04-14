import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho nome="Fernando" idade ={20} trabalho={true}></DiretaFilho>
            <DiretaFilho nome="Arthur" idade ={16} trabalho={false}></DiretaFilho>
        </div>
    )
}