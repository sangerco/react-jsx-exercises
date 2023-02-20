const Tweet = (props) => {
    return (
        <div class="card">
            <div class="card-body">
            <p>{ props.username }</p>
            <p>{ props.name }</p>
            <p>{ props.date }</p>
            <p>{ props.message }</p>
            </div>
        </div>
    )
}