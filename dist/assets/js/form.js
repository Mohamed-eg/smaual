const firebaseConfig = {
    apiKey: "AIzaSyBwKzBNsdJzt5pQ5sEsQdB8CrI1RINYS50",
    authDomain: "green-242f9.firebaseapp.com",
    databaseURL: "https://green-242f9-default-rtdb.firebaseio.com",
    projectId: "green-242f9",
    storageBucket: "green-242f9.appspot.com",
    messagingSenderId: "1034882225780",
    appId: "1:1034882225780:web:6586f279d9974ac13be321"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  var formDB = firebase.database().ref('contactForm') ;
  const gitValue= (id)=>{
      return document.getElementById(id).value;
  }

   const submitfu =(e)=>{
      e.preventDefault() ;
      var name =gitValue('Name');
      var email =gitValue('email');
      var phone =gitValue('phone');
      var address =gitValue('address');
      var country =gitValue('country');
      var date =gitValue('date');
      saveData(name,email,phone,address,country,date)
      document.querySelector('.formcountaner').style.display="none";
      document.querySelector('.valed').style.display="flex";
      setTimeout(()=>{
        document.querySelector('.formcountaner').style.display="flex";
        document.querySelector('.valed').style.display="none";
      },3000)
  }

  document.getElementById('contactForm').addEventListener("submit",submitfu);
 
  //save the data
  const saveData = (nam,email,phone,address,country,date)=>{
    var newPerson = formDB.push();
    newPerson.set({
        name:nam,
        email:email,
        phone:phone,
        address:address,
        country:country,
        date:date
    })
  }