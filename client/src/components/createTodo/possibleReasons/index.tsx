import React from 'react';
import styles from './styles.module.css'

interface appProps {
  captureReasonsChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const PossibleReasons = ({captureReasonsChange}: appProps) => {
  const [showReasonCount, setShowReasonCount] = React.useState(0);

  React.useEffect(
    () => {
      console.log('possibleReasons component got mounted');
    }
  )

  const removeButton = () => {
    return (
      <span onClick={
        () => setShowReasonCount(val => val - 1)
      } className={styles.removeReason}>&#10007;</span>
    )
  }

  return (
    <div className={styles.container} >
      <div>
        <h3>Possible Roadblocks</h3>
        <details className='subtext'>
          <summary>Expand for more explanation</summary>
          <p className={styles.summaryText}>Add reasons that you think will lead you to not reach the goal. You can add upto three</p>
          </details>
      </div>
      {showReasonCount >= 1 && (
        <div className={styles.reasonsContainer}>
          <div>
            <div>
              <label htmlFor='firstReason'>First Reason</label>{removeButton()}
            </div>
            <input type='text' id='firstReason' onChange={e => captureReasonsChange(e)}/>
          </div>
          <div>
            <label htmlFor='firstSteps'>What can you do to avoid this</label>
            <textarea 
              id='firstSteps' 
              className={styles.possibleReasonsTextArea} 
              onChange={e => captureReasonsChange(e)}></textarea>
          </div>
        </div>
      )}
      {showReasonCount >= 2 && (
        <div className={styles.reasonsContainer}>
          <div>
            <label htmlFor='secondReason'>Second Reason</label>{removeButton()}
            <input type='text' id='secondReason' onChange={e => captureReasonsChange(e)}/>
          </div>
          <div>
            <label htmlFor='secondSteps'>What can you do to avoid this</label>
            <textarea 
              id='secondSteps' 
              className={styles.possibleReasonsTextArea}
              onChange={e => captureReasonsChange(e)}
              ></textarea>
          </div>
        </div>
      )}
      {showReasonCount === 3 && (
        <div className={styles.reasonsContainer}>
          <div>
            <label htmlFor='thirdReason'>Third Reason</label>{removeButton()}
            <input type='text' id='thirdReason' onChange={e => captureReasonsChange(e)}/>
          </div>
          <div>
            <label htmlFor='thirdSteps'>What can you do to avoid this</label>
            <textarea 
              id='thirdSteps' 
              className={styles.possibleReasonsTextArea}
              onChange={e => captureReasonsChange(e)}
            ></textarea>
          </div>
        </div>
      )}
      {
        showReasonCount < 3 && (
          <button onClick={(e) => {
            e.preventDefault();
            setShowReasonCount(val => {
              if (val < 3) {
                return val + 1;
              }
              return val;
            });
          }}>Add Reason</button>
        )
      }
   </div>
  );
};

export default PossibleReasons;