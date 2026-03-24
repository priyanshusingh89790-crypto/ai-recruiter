export const analyzeExperience = (text) => {
  const t = text.toLowerCase();

  let role = "Developer";
  let skills = [];

  if (t.includes("frontend")) {
    role = "Frontend Developer";
    skills = ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Git"];
  }

  else if (t.includes("backend")) {
    role = "Backend Developer";
    skills = ["Node.js", "Express", "MongoDB", "API", "Git"];
  }
  else if (t.includes("fullstack")) {
    role = "Fullstack Developer";
    skills = ["React", "Node.js", "Express", "MongoDB", "API", "Git"];
  }

  else if (t.includes("python")) {
    role = "Python Developer";
    skills = ["Python", "Pandas", "NumPy"];
  } 
  else if (t.includes("java")) {
    role = "Java Developer";
    skills = ["Java", "Spring", "MySQL", "Git"];
  }
  else if (t.includes("c++")) {
    role = "C++ Developer";
    skills = ["C++", "Spring", "MySQL", "Git"];
  }
  else if (t.includes("c")) {
    role = "C Developer";
    skills = ["C", "Spring", "MySQL", "Git"];
  }

  else {
    skills = ["Communication", "Problem Solving"];
  }

  return { role, skills };
};

export const generateSummary = ({ role, skills }) => {
  return `I am a ${role} with skills in ${skills.join(", ")}.`;
};
