import React from 'react';

const Projects = ({project}) => {
    const {picture,link} = project
    console.log(picture)
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Projects;