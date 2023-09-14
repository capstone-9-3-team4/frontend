import React, { useState } from 'react';
import './App.css';

function App() {
  const peopleData = [
    { id: 1, name: 'Person 1', imageUrl: 'image_url_1.jpg' },
    { id: 2, name: 'Person 2', imageUrl: 'image_url_2.jpg' },
    { id: 3, name: 'Person 3', imageUrl: 'image_url_3.jpg' },
    { id: 4, name: 'Person 4', imageUrl: 'image_url_4.jpg' },
    { id: 5, name: 'Person 5', imageUrl: 'image_url_5.jpg' },
  ];

  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="App">
      <h1>People List</h1>
      <div className="person-list">
        {peopleData.map((person) => (
          <div
            key={person.id}
            className="person"
            onClick={() => handlePersonClick(person)}
          >
            <img src={person.imageUrl} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
        ))}
      </div>
      {selectedPerson && (
        <div className="person-details">
          <h2>Selected Person</h2>
          <img src={selectedPerson.imageUrl} alt={selectedPerson.name} />
          <h3>{selectedPerson.name}</h3>
          {/* Add a text box or any other details for the selected person here */}
        </div>
      )}
    </div>
  );
}

export default App;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>About Us</title>
//     <style>
//         /* Basic CSS styles for tabs */
//         .tab {
//             display: none;
//         }
//         .tab.active {
//             display: block;
//         }
//         .tab-content {
//             display: none;
//             padding: 20px;
//         }
//         /* Style for images and dropdown bios */
//         .bio {
//             display: none;
//         }
//         /* Style for tab navigation */
//         .tabs {
//             display: flex;
//         }
//         .tab-button {
//             padding: 10px 20px;
//             cursor: pointer;
//             border: 1px solid #ccc;
//             margin-right: 10px;
//         }
//     </style>
// </head>
// <body>
//     <h1>About Us</h1>
    
//     <!-- Tab Navigation -->
//     <div class="tabs">
//         <div class="tab-button" onclick="showTab(0)">Tab 1</div>
//         <div class="tab-button" onclick="showTab(1)">Tab 2</div>
//         <div class="tab-button" onclick="showTab(2)">Tab 3</div>
//         <div class="tab-button" onclick="showTab(3)">Tab 4</div>
//         <div class="tab-button" onclick="showTab(4)">Tab 5</div>
//     </div>

//     <!-- Tab Content -->
//     <div class="tab active">
//         <img src="image1.jpg" alt="Team Member 1">
//         <div class="bio">
//             <p>Team Member 1's bio goes here...</p>
//         </div>
//     </div>
//     <div class="tab">
//         <img src="image2.jpg" alt="Team Member 2">
//         <div class="bio">
//             <p>Team Member 2's bio goes here...</p>
//         </div>
//     </div>
//     <div class="tab">
//         <img src="image3.jpg" alt="Team Member 3">
//         <div class="bio">
//             <p>Team Member 3's bio goes here...</p>
//         </div>
//     </div>
//     <div class="tab">
//         <img src="image4.jpg" alt="Team Member 4">
//         <div class="bio">
//             <p>Team Member 4's bio goes here...</p>
//         </div>
//     </div>
//     <div class="tab">
//         <img src="image5.jpg" alt="Team Member 5">
//         <div class="bio">
//             <p>Team Member 5's bio goes here...</p>
//         </div>
//     </div>

//     <script>
//         // JavaScript to show/hide tabs and bios
//         function showTab(index) {
//             const tabs = document.querySelectorAll('.tab');
//             const bios = document.querySelectorAll('.bio');

//             tabs.forEach((tab, i) => {
//                 if (i === index) {
//                     tab.classList.add('active');
//                     bios[i].style.display = 'block';
//                 } else {
//                     tab.classList.remove('active');
//                     bios[i].style.display = 'none';
//                 }
//             });
//         }

//         // Show the first tab initially
//         showTab(0);
//     </script>
// </body>
// </html>
