import React, { useState, useEffect, useRef } from 'react';
import MonacoEditor from 'react-monaco-editor';
import mermaid from 'mermaid';
import yaml from 'js-yaml';
import './App.css';

const initialYaml = `
state_machine:
  states:
    - name: created
      events:
        - name: add_data
          next_state: in_progress
          handlers:
            success: operation_handle_data
            failure: operation_rejected
    - name: in_progress
      events:
        - name: completed
          next_state: succeeded
          handlers:
            success: operation_completed
            failure: operation_rejected
        - name: error
          next_state: fail
          handlers:
            success: operation_ended_with_error
            failure: operation_rejected
    - name: succeeded
      events: []
    - name: fail
      events: []
`;

function App() {
  const [yamlContent, setYamlContent] = useState(initialYaml);
  const graphContainer = useRef(null);

  useEffect(() => {
    try {
      const stateMachine = yaml.load(yamlContent);
      const states = stateMachine.state_machine.states;
 
      let graph = 'stateDiagram-v2\n';
      states.forEach(state => {
        state.events.forEach(event => {
          graph += `${state.name} --> ${event.next_state} : ${event.name}\n`;
        });
      });
 
      mermaid.initialize({ startOnLoad: true });
      mermaid.render('graphDiv', graph, (svgCode) => {
        if (graphContainer.current) {
          graphContainer.current.innerHTML = svgCode;
        }
      });
    } catch (error) {
      console.error('Invalid YAML content', error);
    }
  }, [yamlContent]);
 
  return (
    <div className="App">
      <div className="editor-container">
        <MonacoEditor
          width="50vw"
          height="90vh"
          language="yaml"
          theme="vs-dark"
          value={yamlContent}
          onChange={setYamlContent}
        />
      </div>
      <div className="graph-container" ref={graphContainer}>
        <div id="graphDiv" className="mermaid" />
      </div>
    </div>
  );
}

export default App;