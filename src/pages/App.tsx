import React from 'react';
import Section from '../components/Section';
import Data from '../data';

function App() {
    return (
        <>
         <Section 
          variant='blue'
          title={Data[0].title}
          description={Data[0].title}
         />
         <Section 
          variant='beige'
          title={Data[1].title}
          description={Data[1].title}
         />
         <Section 
          variant='blue'
          title={Data[2].title}
          description={Data[2].title}
         />
         <Section 
          variant='white'
          title={Data[3].title}
          description={Data[3].title}
         />
         <Section 
          variant='black'
          title={Data[4].title}
          description={Data[4].title}
         />
        </>
    )
}

export default App;