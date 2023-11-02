/**
This code helps creating a weekly schedule of Magia leaders in Cerejeiras school.
The schedule is finalized during the weekly Friday assembly and takes into account the 
following limitations:
 1. No need to pick leaders on holidays and weekends
 2. On some days of the week some students aren't present and can't be chosen as leaders
    a. Students missing on Mon: 
    b. Students missing on Tue: Guy, Yahor, Anior.......
    c. Students missing on Wed: Guy, 
    d. Students missing on Thur:
    c. Students missing on Friday:
 
 3. If the student who got chosen is from preschool a responsible teacher or student 
    need to be chosen to accompany the preschool kid.
    
    a. List of preschool students
    b. List of responsible teachers and or students

    4. If someone was a leader last week she/he can't be a leader this week
 */

    function showDays(){
      var missing_students_Monday= ['Rita'];
      var missing_students_Tuesday= ['Guy', 'Anior', 'Yahor','Rita','Duarte','Rafa','Anna Sophia', 'Rosie', 'Elisa', 'Annamaja'];
      var missing_students_Wednesday= ['Rita', 'Elisa', 'Anna Sophia', 'Guy'];
      var missing_students_Thursday= ['Gabriel', 'Andreas', 'Rita', 'Elisa', 'Frankie', 'Stef', 'Rafa', 'EmmaN', 'Eef', 'Annamaja', 'Tom'];
      var missing_students_Friday= ['João'];
      var missing_students= [missing_students_Monday,missing_students_Tuesday,missing_students_Wednesday,missing_students_Thursday,missing_students_Friday];
      var LastWeek= ['Guy', 'Tom', 'Yahor', 'Anior', 'Rafa'];
      var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      var students = ['Edin','EmmaN', 'Guy', 'Tom', 'Anior', 'Misha', 'Yahor', 'Annamaja', 'Maja', 'Joana',
      'Stef', 'Eef', 'Rafa', 'Eben', 'Joshua', 'Boris', 'Haleli', 'Maya', 'Rita', 'Anna Sophia',
      'Elisa', 'Lia', 'Frankie', 'Carlito', 'Andreas', 'Enzo', 'Cody', 'Rosie', 'Gabriel', 'Lawrie',
      'Guilherme', 'EmmaA', 'Teresa', 'Duarte', 'Emil', 'João'];
      let i = 0;
     
      while( i < days.length ){
          var j = students.length;
          var random_i = Math.floor(Math.random() * j);

          while (missing_students[i].includes(students[random_i]) || (LastWeek.includes(students[random_i]))){
              random_i = Math.floor(Math.random() * j);
          }
          document.getElementById(days[i]).innerHTML = days[i] ;
          document.getElementById(days[i] + 'Leader').innerHTML = students[random_i];
          document.getElementById(days[i] + 'Pic').innerHTML = students[random_i];
          students.splice(random_i, 1);
          i++;
      }   
      document.getElementById("schedule").style.display = "flex"; 
  }





//     function showDays(){
//       var missing_students_Monday= ['Rita'];
//       var missing_students_Tuesday= ['Guy', 'Anior', 'Yahor','Rita','Duarte','Rafa','Anna Sophia', 'Rosie', 'Elisa', 'Annamaja'];
//       var missing_students_Wednesday= ['Rita', 'Elisa', 'Anna Sophia', 'Guy'];
//       var missing_students_Thursday= ['Gabriel', 'Andreas', 'Rita', 'Elisa', 'Frankie', 'Stef', 'Rafa', 'EmmaN', 'Eef', 'Annamaja', 'Tom'];
//       var missing_students_Friday= ['João'];
//       var missing_students= [missing_students_Monday,missing_students_Tuesday,missing_students_Wednesday,missing_students_Thursday,missing_students_Friday];
//       var LastWeek= ['Guy', 'Tom', 'Yahor', 'Anior', 'Rafa'];
//       var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//       var students = ['Edin','EmmaN', 'Guy', 'Tom', 'Anior', 'Misha', 'Yahor', 'Annamaja', 'Maja', 'Joana',
//       'Stef', 'Eef', 'Rafa', 'Eben', 'Joshua', 'Boris', 'Haleli', 'Maya', 'Rita', 'Anna Sophia',
//       'Elisa', 'Lia', 'Frankie', 'Carlito', 'Andreas', 'Enzo', 'Cody', 'Rosie', 'Gabriel', 'Lawrie',
//       'Guilherme', 'EmmaA', 'Teresa', 'Duarte', 'Emil', 'João'];
//       let i = 0;
     
//       while( i < days.length ){
//           var j = students.length;
//           var random_i = Math.floor(Math.random() * j);
//           console.log(missing_students[i]);
//           while (missing_students[i].includes(students[random_i]) || (LastWeek.includes(students[random_i]))){
//               random_i = Math.floor(Math.random() * j);
//           }
//           document.getElementById(days[i]).innerHTML = days[i] + ": ";
//           document.getElementById(days[i] + 'Leader').innerHTML = students[random_i];
//           console.log(missing_students[i].includes(students[random_i]));
//           students.splice(random_i, 1);
//           i++;
//       }    
//   }



/*
function showDays(){
    var missing_students_tue= ['Anior'];    
    var missingStudents = { Monday: ['Teresa', 'Duarte'], 
                           Tuesday: ['Guy', 'Yahor', 'Anior', 'Rita', 'Elisa', 'Ana Sophia', 'Rafa'] , 
                           Wednesday: [], 
                           Thursday: [], 
                           Friday:  [] };
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    var allStudents = [ 'Edin','EmmaN', 'Guy', 'Tom', 'Anior', 'Misha', 'Yahor', 'Anamaya', 'Maja', 'Joana', 
                        'Stef', 'Eef', 'Rafa', 'Eben', 'Joshua', 'Boris', 'Haleli', 'Maya', 'Rita', 'Ana Sophia', 
                        'Elisa', 'Lia', 'Frankie', 'Carlito', 'Andreas', 'Enzo', 'Cody', 'Rosie', 'Gabriel', 'Lawrie',
                        'Guilherme', 'EmmaA', 'Teresa', 'Duarte', 'Emil', 'João'];
    
   var students = allStudents;
   let i = 0;
   var luckyStudents = [];
   while( i < days.length ){  
        document.getElementById(days[i]).innerHTML = days[i] + ': ';
        
        let students2Remove  = missingStudents[days[i]];
        students = removeStudents(allStudents, students2Remove);
        students = removeStudents(students, luckyStudents);

        var random_i = Math.floor(Math.random() * students.length);   
        let lucky = students.splice(random_i, 1);

        document.getElementById(days[i]+ 'Leader').innerHTML = lucky;
        luckyStudents.push(lucky);
        i++; 
    }    
 }


function removeStudents( partStudents, students2Remove ){
      if(partStudents.length > 1  && students2Remove.length > 0){
         for (let i = 0; i < students2Remove.length; i++) {
            let found =  partStudents.indexOf(students2Remove[i]); 
            if( found > -1 ){
               partStudents.splice(found, 1);
            }
         }
      }
      return partStudents;
}
*/