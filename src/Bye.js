
function Bye(props) {
    const name = props.name,
        gender = props.gender,
        age = props.age;
    return (
        <div>
            {name} {gender} {age}
        </div>
    )
}

export default Bye;