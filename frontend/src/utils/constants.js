import { iconData } from "./ArrayProjectData";
function generateProjects() {
  const projects = [];
  for (let i = 0; i <12; i++) {
    projects.push({
      name: iconData[i].Code,
      initialImg: `data/Project 0${i}/Logo ${i}.jpg`,
      hoverImage: `data/Project 0${i}/1.jpg`,
      data: {
        name:iconData[i].Name, 
        category:iconData[i].Typology,
        year:iconData[i].Year,
        status:iconData[i].Status,
        location:iconData[i].Location,
        img:[`Data/Project 0${i}/Banner.jpg`,`data/Project 0${i}/1.jpg`,`data/Project 0${i}/2.jpg`,`data/Project 0${i}/3.jpg`,`data/Project 0${i}/4.jpg`,],
        description: iconData[i].Description
      }
    });
  }
  return projects;
}
export const projects = generateProjects();  