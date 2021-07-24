import classes from './UserInput.module.css';

function UserInput(props){
    return(
        <form action="#" className={classes.UserInput}>
            <input type="number" value={props.value} onChange={props.change}/>
        </form>
    )
}

export default UserInput;