import React from 'react';

// TODO: CREATE PROJECT COMPONENT WHERE I PASS PROPS, MAP THROUGH TO 6 PRINT PROJECT TILES HERE
// can use npm uuid or give id?
// inside array:
// 6 projects:
// image of deployed app (gif or screenshot)
// title of project
// link to deployed app (dlink)
// link to corresponding github repo (rlink)



const Portfolio = ({ projects }) => {
  return (
    <div>
      <h3 className="text-primary">Projects</h3>
      <div className="flex-row justify-space-between my-4">
        {projects &&
          projects.map((projects) => (
            <div key={projects._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {projects.name} <br />
                </h4>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {projects.image} <br />
                </h4>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {projects.dlink} <br />
                </h4>
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {projects.rlink} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;




// need to create array of objects that I map through to create a component for each element in the array | project tile for each project | NEED 6!!

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
// WHEN I am presented with the Contact section