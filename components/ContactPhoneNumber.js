import React from 'react';


export default function ContactPhoneNumber() { 

  const phoneParts = ['06', '43', '43', '87', '42'];
  const fullNumber = phoneParts.join(' '); 
  const telLink = `tel:${phoneParts.join('')}`;

  return (
     <a href={telLink}>{fullNumber}</a>
  );
};
