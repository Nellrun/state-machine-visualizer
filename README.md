# State Machine Visualizer

State Machine Visualizer is a React application that allows you to visualize state machines defined in YAML. It features a code editor with YAML syntax highlighting and dynamically updates the state machine graph as you edit the YAML content.

## Features

- **YAML Syntax Highlighting**: Edit your state machine definitions with a Monaco Editor that provides YAML syntax highlighting.
- **Real-Time Graph Rendering**: Automatically updates the state machine graph as you edit the YAML content.
- **Simple and Intuitive UI**: A clean and easy-to-use interface to visualize complex state machines.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/state-machine-visualizer.git
   cd state-machine-visualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

1. Edit the YAML content in the editor on the left side of the screen.
2. The state machine graph on the right side will automatically update to reflect the changes.

### Example YAML

Here is an example of a state machine definition in YAML:

```yaml
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
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - The code editor that powers VS Code
- [Mermaid](https://mermaid-js.github.io/mermaid/#/) - Generation of diagrams and flowcharts from text in a similar manner as markdown
- [js-yaml](https://github.com/nodeca/js-yaml) - YAML 1.2 parser and serializer

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of React, Monaco Editor, Mermaid, and js-yaml for their fantastic libraries.
