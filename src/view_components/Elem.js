export default function Elem(props){
    function kattintas(){
        console.log("Index:",props.index)
        props.kattintas(props.index)
    }
    return(
        <div className="elem" onClick={kattintas}>
            <p>{props.ertek}</p>
        </div>
    )
}