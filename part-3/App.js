const App = () => (
    <div>
        <Person 
            name="James" 
            age={16}
            hobbies=
                {["Gaming", "Mountain Biking", "Annoying His Parents"]}/>
        <Person 
            name="Johnathan" 
            age={18}
            hobbies={[]}/>
        <Person 
            name="Cassandra" 
            age={37}
            hobbies=
                {["Photography", "Cooking"]}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"));