let data = {}
if(localStorage.getItem("key")){
  data = JSON.parse(localStorage.getItem("key"))
}

class user{
  constructior(id,name,surname,age,login,password,phone){
  this.id = id
  this.name = name
  this.surname = surname
  this.age = age
  this.login = login
  this.password = password
  this.phone = phone
  }
  add(id,name,surname,age,login,password,phone){
    let user = {
      this.id = id
      this.name = name
      this.surname = surname
      this.age = age
      this.login = login
      this.password = password
      this.phone = phone
  }
  let serealizedObject = JSON.stringify(user)
  localStorage.setItem("this.name",serializedObject)
}
  delete(key){
    delete localStorage.key
  }
  showAll(){
    for(let i =0 ;i<localStorage.length;i++){
      let key = localStorage.key(i);
      alert(`${key}: ${localStorage.getItem(key)
  }
  }
  show(key){
    localStorage.getItem(key)
  }
  edit(key,value){
    localStorage.key = value
  }

}
let user1 = new user("3434263","Vadim","Greck","23","vadia@gmail.com","12321","845y8549649")
let serialObj = JSON.stringify(user1)
localStorage.setItem("myKey",serialObj)
console.log(serialObj)
// let user2 = new user("5645645","Vlad","fghfgh","24","vad@mail.ru","12321","8tryutrurteur")
// let user3 = new user("235w673","Ved","hfghgfh","75","vadia@r","12321ambler.ru","etutrurtu")
