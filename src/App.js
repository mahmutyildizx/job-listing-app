import React, {useState, useEffect} from 'react';
import data from './assets/data.json';
import {JobBoardComponent} from './components';
import {StyledContainer,StyledHeader,StyledImage} from './styles';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);


  return (
    <>
    <StyledHeader>
        <StyledImage src={"images/bg-header-desktop.svg"}></StyledImage>
    </StyledHeader>
    <StyledContainer>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          jobs.map((job) => <JobBoardComponent job={job} key={job.id} />)
        )
      }
    </StyledContainer>
    </>
  );
}

export default App;
