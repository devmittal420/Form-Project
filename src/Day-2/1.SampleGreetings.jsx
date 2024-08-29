const SampleGreeting = () => {
    // Logic
    const uName = "Dev Mittal";
  
    const addNums = (a, b) => {
      return a + b;
    };
  
    return (
      <div>
        <h1>
          Welcome {uName} to Sample Greetings{" "}
          <span>
         - Sum of 1+9= {addNums(1, 9)}  
          </span>
        </h1>
        <div className="form">
          <p>Email</p>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <button>Submit</button>
      </div>
    );
  };
  
  export default SampleGreeting;
  