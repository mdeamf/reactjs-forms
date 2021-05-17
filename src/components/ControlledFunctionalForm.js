import './Forms.css';
import { useEffect, useState } from 'react';

const LOG = '[CONTROLLED FUNCTIONAL FORM]';

export const ControlledFunctionalForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  useEffect(() => {
    console.log(LOG, 'name changed', name);
  }, [name]);

  useEffect(() => {
    console.log(LOG, 'description changed', description);
  }, [description]);

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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};
