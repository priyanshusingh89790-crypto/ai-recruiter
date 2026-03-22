export const suggestSkills = (text) => {
  const skill = text.toLowerCase();

  if (skill.includes("react")) return ["React", "JavaScript", "Frontend", "typescript", "tailwind css", "html", "css", "git", "github"];
  if (skill.includes("node")) return ["Node.js", "Backend", "express", "mongodb", "javascript", "typescript", "git", "github"];
  if (skill.includes("python")) return ["Python", "Data", "pandas", "numpy", "scikit-learn", "tensorflow", "pytorch", "git", "github"];
  if (skill.includes("java")) return ["Java", "Backend", "spring", "mysql", "javascript", "typescript", "git", "github"];
  if (skill.includes("c++")) return ["C++", "Backend", "spring", "mysql", "javascript", "typescript", "git", "github"];
  if (skill.includes("c")) return ["C", "Backend", "spring", "mysql", "javascript", "typescript", "git", "github"];
  return ["Communication", "Problem Solving", "Teamwork", "Leadership", "Adaptability", "Time Management", "Critical Thinking", "Creativity", "Attention to Detail", "Organization"];
};

export const generateSummary = ({ skills, experience }) => {
  return `Skilled in ${skills.join(", ")} with experience in ${experience}. Passionate developer.`;
};