
// function to fetch data from given endpoint;
//if we had multiple api calls then we would had pass the various endpoints in this function
const fetchData = async () => {
  //testing purpose
  
  // let dat={
  //   "tickets": [
  //     {
  //       "id": "TCKT-1",
  //       "title": "Fix UI Alignment Issue",
  //       "tag": ["Bug", "UI", "Frontend", "Critical"],
  //       "userId": "usr-1",
  //       "status": "In progress",
  //       "priority": 2
  //     },
  //     {
  //       "id": "TCKT-2",
  //       "title": "Implement User Authentication",
  //       "tag": ["Feature Request", "Security", "Backend", "Authentication"],
  //       "userId": "usr-2",
  //       "status": "Todo",
  //       "priority": 1
  //     },
  //     {
  //       "id": "TCKT-3",
  //       "title": "Optimize Database Queries",
  //       "tag": ["Performance", "Database", "Optimization", "Backend"],
  //       "userId": "usr-3",
  //       "status": "In progress",
  //       "priority": 3
  //     },
  //     {
  //       "id": "TCKT-4",
  //       "title": "Design New Landing Page",
  //       "tag": ["Design", "UI", "Frontend", "Visual"],
  //       "userId": "usr-4",
  //       "status": "Todo",
  //       "priority": 2
  //     },
  //     {
  //       "id": "TCKT-5",
  //       "title": "Integrate Payment Gateway",
  //       "tag": ["Feature Request", "Payment", "Backend", "Integration"],
  //       "userId": "usr-5",
  //       "status": "In progress",
  //       "priority": 1
  //     }
  //     // Add more random tickets
  //   ],
  //   "users": [
  //     {
  //       "id": "usr-1",
  //       "name": "Alex Johnson",
  //       "available": true
  //     },
  //     {
  //       "id": "usr-2",
  //       "name": "Emma Smith",
  //       "available": false
  //     },
  //     {
  //       "id": "usr-3",
  //       "name": "Michael Williams",
  //       "available": true
  //     },
  //     {
  //       "id": "usr-4",
  //       "name": "Olivia Davis",
  //       "available": true
  //     },
  //     {
  //       "id": "usr-5",
  //       "name": "Liam Brown",
  //       "available": false
  //     }
  //     // Add more random users
  //   ]
  // }
  
    try {
      const response = await fetch(process.env.REACT_APP_API_KEY); //  API endpoint
      const data = await response.json();
      
    
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  

  
  export { fetchData };
  