import React from 'react';
import { useForm } from 'react-hook-form';

const LOG = '[REACT HOOK FORM]';

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(LOG, 'form submitted', data);
  };

  console.log(LOG, 'name changed', watch('name'));

  console.log(LOG, 'form errors', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        type="text"
        placeholder="test"
        {...register('name', { required: true })}
      />
      <input type="submit" />

      <div>{errors.name && 'Name contains an error!'}</div>
    </form>
  );
};
