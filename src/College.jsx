function College({names}){
    return(
        <div>
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            <h2>{names[3]}</h2>
            <h2>{names[4]}</h2>
            <hr></hr>
        </div>
    )
}

export default College

// This data is in the form of a list and can be passed easier with the help of loops.