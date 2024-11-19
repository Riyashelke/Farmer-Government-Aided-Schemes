// Admin Functionality
const postCropDetails = (cropData) => {
    db.collection('crops').add(cropData)
      .then(() => console.log('Crop details added successfully!'))
      .catch((error) => console.error('Error adding crop details:', error));
  };
  
  const postGovtSchemes = (schemeData) => {
    db.collection('schemes').add(schemeData)
      .then(() => console.log('Scheme added successfully!'))
      .catch((error) => console.error('Error adding scheme:', error));
  };
  
  const approveSchemeRequest = (requestId) => {
    db.collection('schemeRequests').doc(requestId).update({ status: 'Approved' })
      .then(() => console.log('Request approved successfully!'))
      .catch((error) => console.error('Error approving request:', error));
  };

  