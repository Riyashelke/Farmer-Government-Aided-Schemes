// User Functionality
const registerUser = (userData) => {
    auth.createUserWithEmailAndPassword(userData.email, userData.password)
      .then((userCredential) => {
        console.log('User registered successfully!');
        db.collection('users').doc(userCredential.user.uid).set(userData);
      })
      .catch((error) => console.error('Error registering user:', error));
  };
  
  const loginUser = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(() => console.log('User logged in successfully!'))
      .catch((error) => console.error('Error logging in user:', error));
  };
  
  const applyForScheme = (applicationData) => {
    db.collection('schemeRequests').add(applicationData)
      .then(() => console.log('Application submitted successfully!'))
      .catch((error) => console.error('Error submitting application:', error));
  };
  