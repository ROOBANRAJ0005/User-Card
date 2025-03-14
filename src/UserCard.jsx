let userData = [
    {
        name:"Dragon Queen",
        city:"Dragon Stone",
        profession:"Dragon Controller",
        profile:"img1.jpg",
        skills:["html","css","java","c++"],
        visible:true
    }
]

function User(props){
    return (
    <div className="container">
        <span className="pro online">Online</span>
        <img src="img1.jpg" alt=""/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.profession}</p>
        <div className="buttons">
            <button className="message">Message</button>
            <button className="following">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>

    </div>);
}

export const UserCard = () => {
  return (
    <>
    {/* <User name="roobanraj" city="madurai" profession="developer" skills={["html","css","java","c++"]} /> */}
            {userData.map((person,index)=>(
                <User key={index}
                name={person.name}
                city={person.city}
                profession={person.profession}
                visible={person.visible}
                skills={person.skills}

                />

            ))}
    </>
  )
}
