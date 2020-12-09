
               

            document.getElementById('submit').onclick=function(){
              let details={

                username:          document.getElementById('name').value,
                email:             document.getElementById('mail').value,
                phone_number:      document.getElementById('phnum').value,
                DOB_day:           document.getElementById('dob').value,
                DOB_month:         document.getElementById('month').value, 
                DOB_year:          document.getElementById('year').value,
                gender:            document.getElementById('gender').value,
                education:         document.getElementById('edu').value,
                applying_position :document.getElementById('pos').value,
                resume:            document.getElementById('file').value
             }
              console.log(details);
            }
    
             
            
            