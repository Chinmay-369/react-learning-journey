import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/contact');
  }

 function goMockpg() {
  navigate('mock'); 
}

function goReportPg() {
  navigate('report');
}

  return (
    <>
      <h1>Dashboard</h1>
      <p>This is Dashboard page</p>
      <button onClick={handleClick}>
        Move to contact page
      </button>

      <button onClick={goMockpg}>
        Go to Mock Page
      </button>

       <button onClick={goReportPg}>
        Go to Report Page
      </button>
      <Outlet /> {/* Renders nested routes like /dashboard/mock */}
    </>
  );
};

export default Dashboard;
