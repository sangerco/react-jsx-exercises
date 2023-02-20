const Person = ({ name, age, hobbies }) => {
    let vote;
    if (name.length > 6) {
        name = name.substring(0,6);
    }
    if (age >= 18) {
        vote = "Please go vote!"
    } else {
        vote = "You must be 18."
    }
    return (
        <div class='card-group'>
            <div class="card">
                <div class='card-body'>
                    <p>Learn some information about this person:</p>
                    Name: { name }<br></br>
                    Age: { age }<br></br>
                    <h3>{ vote }</h3><br></br>
                    Hobbies:
                        <ul>{hobbies.map(h => 
                        (
                            <li>
                                <b>{h}</b>
                            </li>
                            )
                        )
                        }</ul>
                </div>
            </div>
        </div>
    )
}