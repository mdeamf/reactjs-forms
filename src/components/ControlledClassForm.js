import './Forms.css';
import React from 'react';

const LOG = '[CONTROLLED CLASS FORM]';

export class ControlledClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  componentDidMount() {
    console.log(LOG, 'mounted');
  }

  componentDidUpdate() {
    console.log(LOG, 'updated', this.state);
  }

  setInput(e) {
    console.log(LOG, 'set input', e.target.id, e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        {/* Text Input */}
        <div className="form-group">
          <label>
            Name:
            <input
              id="name"
              type="text"
              placeholder="Type your name!"
              value={this.state.name}
              onChange={(e) => this.setInput(e)}
            />
          </label>
        </div>

        {/* Textarea */}
        <div className="form-group">
          <label>
            Description:
            <textarea
              id="description"
              type="text"
              placeholder="Describe yourself!"
              value={this.state.description}
              onChange={(e) => this.setInput(e)}
            />
          </label>
        </div>
      </div>
    );
  }
}
