import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [scores, setScores] = useState({
    accuracy: 5,
    clarity: 5,
    helpfulness: 5,
    safety: 5
  });
  const [improved, setImproved] = useState("");

  const generateResponse = async () => {
    // Mock AI response (replace with API later)
    setResponse("Sample AI response based on prompt.");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Response Evaluator</h1>

      <textarea
        placeholder="Enter prompt"
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={generateResponse}>Generate</button>

      <h3>AI Response:</h3>
      <p>{response}</p>

      {Object.keys(scores).map((key) => (
        <div key={key}>
          <label>{key}: {scores[key]}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={scores[key]}
            onChange={(e) =>
              setScores({ ...scores, [key]: e.target.value })
            }
          />
        </div>
      ))}

      <textarea
        placeholder="Improved response"
        onChange={(e) => setImproved(e.target.value)}
      />

      <button
        onClick={() =>
          console.log({ prompt, response, scores, improved })
        }
      >
        Save Annotation
      </button>
    </div>
  );
}
