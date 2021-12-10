import React from 'react';

interface Props {
  limit: number;
  idForTextArea: string;
  nameForTextArea: string;
  value: string;
  updateChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const MAX_LENGTH = 200

const TextAreaWithWordLimit = (props: Props) => {
  const [text, setText] = React.useState('');
  return (
    <>
      <textarea maxLength={200} onChange={e => props.updateChange(e)} value={props.value}>
      
      </textarea>
      <p>{200-props.value.length + ' '} characters remaining</p>
      {
        text.length === MAX_LENGTH && <p>you have reached the maximum possible length</p>
      }
    </>
  )
}

export default TextAreaWithWordLimit