import { MouseEvent } from 'react';

export const onResetHandler = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log('form should get reset now');
}

export const onSubmitHandler = (e: MouseEvent<HTMLButtonElement>, formValues: any) => {
  e.preventDefault();
  console.log('form should get submitted now', formValues);
}