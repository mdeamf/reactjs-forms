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

  console.log(LOG, 'cpf changed', watch('cpf'));

  console.log(LOG, 'form errors', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        type="text"
        placeholder="Type your name!"
        {...register('name', { required: true })}
      />

      <div>{errors.name && 'Name contains an error!'}</div>

      <input
        name="cpf"
        type="text"
        placeholder="Inform your CPF"
        {...register('cpf', { required: true, pattern: /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/gm })}
      />

      <div>{errors.cpf && 'CPF contains an error!'}</div>

      <input type="submit" />
    </form>
  );
};
