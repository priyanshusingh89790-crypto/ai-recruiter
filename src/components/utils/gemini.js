import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const getAIProfile = async (text) => {
  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Extract role, skills and summary from this text: "${text}".
Return JSON like:
{
  "role": "",
  "skills": [],
  "summary": ""
} Return ONLY valid JSON.
No markdown.
No explanation.
  give skill atleast 10 and summary must impactful briefly`
              }
            ]
          }
        ]
      }
    );

    const output =
      res.data.candidates[0].content.parts[0].text;
    console.log(output);

   const match = output.match(/\{[\s\S]*\}/);

if (!match) {
  throw new Error("No JSON found");
}

const json = JSON.parse(match[0]);
return {role:json.role || "",skills:json.skills || [],summary:json.summary || ""};

  } catch (err) {
    console.log("Gemini error:", err);
    return null;
  }
};