function UserInput(props){
    return(
        <form action="#">
            <input type="number" value={props.value} onChange={props.change}/>
        </form>
    )
}

export default UserInput;