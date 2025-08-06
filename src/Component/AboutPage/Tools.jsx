import React from 'react';
import './Tools.css';

const devTools = [
  { name: 'Notepad' },
  { name: 'Jupyter Notebook' },
  { name: 'Sublime' },
  { name: 'Visual Studio' },
];

const aiTools = [
  { name: 'OpenAI' },
  { name: 'Cursor AI' },
  { name: 'ChatGPT' },
  { name: 'Claude AI' },
  { name: 'Gemini (Google AI)' },
  { name: 'TensorBoard' },
  { name: 'Kaggle Kernels' },
  { name: 'Google Colab' },
  { name: 'Jupyter Notebook' },
  { name: 'Hugging Face' },
  { name: 'LangChain' },
  { name: 'AutoGPT' },
  { name: 'Weights & Biases' },
  { name: 'Pinecone' },
  { name: 'Anthropic AI' },
  { name: 'Llama 3' },
  { name: 'DeepMind' },
  { name: 'Stable Diffusion' },
  { name: 'MidJourney' },
  { name: 'Runway ML' },
];


const Tools = () => {
  return (
    <div className="tools-section">
      <h2 className="tools-title">Tools I Use</h2>

      <h3 className="sub-title">Development Tools</h3>
      <div className="card-container">
        {devTools.map((tool, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{tool.name.toUpperCase()}</h3>
          </div>
        ))}
      </div>

      <h3 className="sub-title">AI Tools</h3>
      <div className="card-container">
        {aiTools.map((tool, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{tool.name.toUpperCase()}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
