    JavaScript Fundamentals 



    Variable - A variable is a container for data 

    Const - A variable with data that cannot be reassigned (un-changable)
    Example: const name = "Philippa"

    Let - A variable with data that can be reassigned (changable)
    Example: let score = 0



    Function - Assigns something a task 

    defining — creating the function
    Example: 
    function greet(name) {
    return "Hello " + name
    }

    calling — executing it
    Example:
    greet("Philippa")  // "Hello Philippa" 

    return - returns whatever value you tell it to 
    
    Arrow function - shortened sytntax for functions 
    Example: 
    const greet = (name) => "Hello " + name

    Parameter — the placeholder in the definition (name)
    Argument — the actual value you pass in when calling ("Philippa")


    Array - A list that holds data in order accessed by an index
    Example: 
    const names = ["Philippa", "Jane", "Lande"]

    Index - Is the position number of each item within an array, always starting at 0 
    Square brackets [] with the specific index number gives you the specific item 
    Example: 
    names[0] 
    ^ this would give you "Philippa"

    forEach - triggered for each item in an array (without returning)
    Example: 
    names.forEach((name) => {
        console.log (name)
    })

    map - transforms each item in an array and returns a new array 
    Example: 
    names.map ((name ) => {
        return name.toUpperCase ()
    })

    An object - stores related data as key-value pairs, each having a name (key) and a value, accessed by key name
    Example: 
    const player = {
        name: "McGregor",
        goals: 12,
        active: true
    }

    to access an object - by key name using dot notation 
    Example: 
    player.name   // "McGregor"
    player.goals  // 12

    array of objects
    const players = [
    { name: "McGregor", goals: 12 },
    { name: "Wallace", goals: 8 }
    ]

    access with index then dot notation
    players[0].name  // "McGregor"
    players[1].goals // 8

    Callback - A function you pass to another function, to be called later when something happens (deferred execution)
    onClick — triggered by user action
    Example:
    <button onClick={() => setIsDark(!isDark)}>

    forEach — triggered for each item in array
    Example: 
    ames.forEach((name) => {
    console.log(name)
    })