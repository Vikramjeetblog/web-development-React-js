import React from 'react'

const Teamdata = () => {
    const Teamdata = [
        { name: "[Empolyee Name]", position: "Team Lead" },
        { name: "[Empolyee Name]", position: "Sales Officer" },
        { name: "[Empolyee Name]", position: "Sales Officer" },
       { name: "[Empolyee Name]", position: "Sales Officer" },
       { name: "[Empolyee Name]", position: "Marketing Officer" },
       { name: "[Empolyee Name]", position: "Marketing Officer" },
       { name: "[Empolyee Name]", position: "Marketing Officer" },
        
        
       
        
        
        
      ];
  return (
    <div className='Member'>
      {Teamdata.map((data, index) => (
       
        <div key={index} className='teamMember'>
          <img src={require("../Images/male.png")} alt='male' className='image' />
          <h3 className="name">{data.name}</h3>
          <p className="position">{data.position}</p>
        </div>
        
      ))}
      
    </div>
    
  )
}

export default Teamdata