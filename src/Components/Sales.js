import React from 'react';
import '../Components/Style.css';

const Sales = () => {
  const DeveloperData = [
    { name: "[Founder Name]", position: "Founder CEO" },
    { name: "[Founder Name]", position: "Founder CEO" },
    {name:"[VP Name]", position:"VP,Development & Growth"},
    {name:"[VP Name]", position:"VP,Sales &Marketing"},
    {name:"[VP Name]", position:"VP,Fineance & Opreation"},
    
    
  ];

  return (
    <div className='Member'>
      {DeveloperData.map((data, index) => (
       
        <div key={index} className='teamMember'>
          <img src={require("../Images/male.png")} alt='male' className='image' />
          <h3 className="name">{data.name}</h3>
          <p className="position">{data.position}</p>
        </div>
        
      ))}
      
    </div>
  );
}

export default Sales;
