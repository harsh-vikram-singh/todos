import React, {useState, ChangeEvent} from 'react';
import TextAreaWithWordLimit from '../reuseable/textAreaWithWordLimit';
import PossibleReasons from './possibleReasons';
import { onSubmitHandler, onResetHandler } from './createTodoUtils';
import axios from '../../axios';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [roadblocks, setRoadblocks] = useState({
    firstReason: '',
    firstSteps: '',
    secondReason: '',
    secondSteps: '',
    thirdReason: '',
    thirdSteps: ''
  });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isApiRequest, setIsApiRequest] = useState('waiting'); // loading | waiting
  const [user, setUser] = useState({
    email: 'singh.harshvikram@gmail.com',
    id: 1
  });
  
  const getFormValues = () => {
    return { title, description, roadblocks, startDate, endDate, userId: user.id}
  }

  // method to capture reasons change and store into the state
  const captureResonsChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setRoadblocks({...roadblocks, [e.target.id]: e.target.value});
  }

  React.useEffect(() => {
    if (isApiRequest === 'loading') {
      axios({
        method: 'post',
        data: getFormValues(),
        url: '/todos/create'
      })
        .then(response => response.data)
        .then(data => console.log('api response: ', data))
        .then(() => setIsApiRequest('waiting'))
        .catch(err => console.log('following error occured: ', err))
      };
    }, [isApiRequest])

  return (
    <div id='createTodoContainer'>
      <h1>Create a goal</h1>
      <form id='formCreateTodo'>
        <div>
          <label htmlFor='todoTitle'>Title</label><br />
          <input 
            id='todoTitle'
            type='text'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='todoDescription'>Description</label><br />
          <TextAreaWithWordLimit
            limit={200}
            idForTextArea='todoDescription'
            nameForTextArea='description'
            updateChange={e => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <h4 style={{marginTop: 30}}>Choose a start and end date for your goal</h4>
        <div className={`buttonsContainer goalDateSelection`}>
          <div >
            <label htmlFor='goalStartDate'>Start Date: </label>
            <input type='date' id='goalStartDate'onChange={e => setStartDate(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='goalEndDate'>End Date: </label>
            <input type='date' id='goalEndDate' onChange={e => setEndDate(e.target.value)}/>
          </div>
        </div>
        <PossibleReasons captureReasonsChange={captureResonsChange} />
        <div className='buttonsContainer'>
          <button onClick={(e) => {
            setIsApiRequest('loading');
            onSubmitHandler(e, getFormValues())
          }}>Create</button>
          <button onClick={() => {setTitle(''); setDescription('')}}>Reset</button>
        </div>
      </form>

    </div>
  );
};

export default CreateTodo;