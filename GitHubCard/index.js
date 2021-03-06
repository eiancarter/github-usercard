/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/eiancarter')
    .then( response => {
      const myGit = createGitCard(response.data);
        entryPoint.appendChild(myGit)
      });

    // .catch( error => {
    //   console.log('error', error)
    // })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// axios.get('https://api.github.com/users/eiancarter')
//   .then( response => {
//     console.log(response.data);
//     const followersGit = createGitCard(response.data);
//       entryPoint.appendChild(followersGit)
//   });
const entryPoint = document.querySelector('.cards');

async function addFollowers(array){
  array.forEach(element =>{
    axios.get(`https://api.github.com/users/${element}`).then( response =>{
      entryPoint.appendChild(createGitCard(response.data))
     console.log(response, 111111)
    }).catch(err =>{
      console.log(err, 'you have failed')
    })
  })
}

addFollowers(followersArray);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function createGitCard (data) {
  
const card = document.createElement('div');
const userImg = document.createElement('img');
const cardInfo = document.createElement('div');
const usersName = document.createElement('h3');
const userName = document.createElement('p');
const userLocation = document.createElement('p');
const userProfile = document.createElement('p');
const userWebAddress = document.createElement('a');
const followerCount = document.createElement('p');
const userFollowingCount = document.createElement('p');
const userBio = document.createElement('p');

//class assignments
card.classList.add('card');
cardInfo.classList.add('card-info');
usersName.classList.add('name');
userName.classList.add('username');

//append children
card.appendChild(userImg);
card.appendChild(cardInfo);
cardInfo.appendChild(usersName);
cardInfo.appendChild(userName);
cardInfo.appendChild(userLocation);
cardInfo.appendChild(userProfile);
userProfile.appendChild(userWebAddress);
cardInfo.appendChild(followerCount);
cardInfo.appendChild(userFollowingCount);
cardInfo.appendChild(userBio);

//add text content
userWebAddress.href = data.html_url;
userImg.src = data.avatar_url;
usersName.textContent = data.name;
userName.textContent = data.login;
userLocation.textContent = `Location: ${data.location}`;
userProfile.textContent = `Profile: ${userWebAddress.href}`;
userWebAddress.textContent = data.html_url;
followerCount.textContent = `Followers: ${data.followers}`;
userFollowingCount.textContent = `Following: ${data.following}`;
userBio.textContent = `Bio: ${data.bio}`;

return card
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
