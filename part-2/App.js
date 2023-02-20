const App = () => (
    <div>
        <Tweet username="bob" name="Bob" date="19.2.2023" message="This is my first tweet."/>
        <Tweet username="fred" name="Fred" date="20.2.2023" message="Nice tweet, bob!"/>
        <Tweet username="piratejohn" name="John" date="20.2.2023" message="Arrrrrrrrrrrr"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));