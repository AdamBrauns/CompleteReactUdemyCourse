function Person(props) {
    return (
      <div class="person">
        <h1>{props.name}</h1>
        <p>Your Age: {props.age}</p>
      </div>
    );
  }
  
  var app = (
    <div>
      <Person name="Adam" age="25" />
      <Person name="John" age="36" />
    </div>
  )
  
  ReactDOM.render(app, document.querySelector('#app'));