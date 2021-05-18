import './Forms.css';
import { useEffect } from 'react';
import { useFormik } from 'formik';

const LOG = '[FORMIK FORM]';

export const FormikForm = () => {
  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated', formik);
  });

  const validateFields = (values) => {
    console.log(LOG, 'validating', values);

    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (values.description.length < 15) {
      errors.description = 'Min. Length is 15';
    }

    console.log(LOG, 'errors', errors);
    return errors;
  };

  const submitFields = (values, { setSubmitting }) => {
    console.log(LOG, 'submitting', values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validate: validateFields,
    onSubmit: submitFields,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Type your name!"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </label>
        </div>

        <p>
          {formik.errors.name ? formik.errors.name : null}
        </p>

        <div className="form-group">
          <label>
            Description:
            <textarea
              id="description"
              name="description"
              type="text"
              placeholder="Describe yourself!"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </label>
        </div>

        <p>
          {formik.errors.description ? formik.errors.description : null}
        </p>

        <input type="submit" />
      </form>
    </div>
  );
};
