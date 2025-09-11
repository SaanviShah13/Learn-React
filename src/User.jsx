function User({user}){
    
    return (
        <div>
            <hr/>
            <h2>name: {user.name}</h2>
            <h2>age: {user.age}</h2>
            <h2>email: {user.email}</h2>
        </div>
    )
}

export default User