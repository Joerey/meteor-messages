var messages = [{
  name: "Kerem Suer",
  title: "San Fransicso",
  time: "15:30",
  avatar: "http://api.randomuser.me/0.3.1/portraits/men/27.jpg",
  type: "Dribbble",
  body: "You would think that after such a warm day I could... Fusce tincidunt, urna rutrum imperdiet euismod, tellus lectus, vitae eleifend felis urna id augue. Aliquam vestibulum consectetur nunc ac mollis. Curabitur et mauris urna, vel lobortis nisi. Etiam orci sapien, sagittis ac laoreet et, fringilla vel lectus. Curabitur ac ante eget lacus volutpat rhoncus. Duis sollicitudin diam sed velit fringilla consectetur. Praesent luctus egesatas nulla, non blandit arcu faucibus sed. Donec magna neque, venenatis quis volutpat tristique, pharetra aipsum. Quisque intredum leo vel auque congue aliquam. Vivamus sed nisl sapien, et pretium mi. Phasellus mi nunc, ultrices id placerat sit amet, pulvinar id celit. Nunc sed dicctum libero. Nullam lacinia consectetur lectus eget interdum. Mauris in nisi at quam hendrerit vulputate vel sit amet risus. Duis luctus porttitor metus vitae tempus.",
},{
  name: "Bob",
  title: "Trendable is available",
  time: "14:22",
  avatar: "http://api.randomuser.me/0.3.1/portraits/men/6.jpg",
  type: "Work",
  body: "Well, after 7 months of some hard work I can finally say",
},{
  name: "Victor Erixon",
  title: "New Porfolio",
  time: "12:00",
  avatar: "http://api.randomuser.me/0.3.1/portraits/men/32.jpg",
  type: "Personal",
  body: "As a designer it is an eternal struggle ever becoming",
},{
  name: "Justin Pervorse",
  title: "Raygun Jams",
  time: "11:53",
  avatar: "http://api.randomuser.me/0.3.1/portraits/women/32.jpg",
  type: "Illustrators",
  body: "Today 45 minute Design Jam subject was guns.",
},{
  name: "Jacb Hubertus",
  title: "Photographing",
  time: "09:20",
  avatar: "http://api.randomuser.me/0.3.1/portraits/men/43.jpg",
  type: "Personal",
  body: "The session great today, the models were all great. Probably the best that",
},{
  name: "Jeremy Sallee",
  title: "Avatars and Mochila",
  time: "09:00",
  avatar: "http://api.randomuser.me/0.3.1/portraits/men/15.jpg",
  type: "Work",
  body: "It is great that you can disable avatars in",
},{
  name: "Steve Surrey",
  title: "engineer",
  time: "15:30",
  avatar: "",
  type: "Dribbble",
  body: "You would think that after such a warm day that could be something really great",
}]


Template.messageList.messages = function(){
  return Session.get('messages');
};

Template.messageContent.message = function()
{
  var messageIndex = Session.get('messageIndex')|| 0;
  return array[messageIndex];
}

var array = messages;

Template.sideMenu.events({
  // 'click .button': function(event){
  //   messages.push(newMessage)
  //   Session.set('messages', messages)
  // },

  'click .typesMenu li': function(event){
    array = []
    var type = $(event.currentTarget).attr('data-type');
      for (var i = messages.length - 1; i>=0; i--)
      {
        if (messages[i].type === type){
        array.push(messages[i]);
      };
    }
    Session.set('messages', array);

    Session.set('messageIndex', 1)
    Session.set('messageIndex', 0)
  }

})


Template.inputMessage.events({
  'click .add': function(){
    var newMessage = {
    name: $('input[name=name]').val(),
    title: $('input[name=title]').val(),
    type: $('input[name=type]').val(),
    body: $('textarea[name=body]').val()
    }
   
    console.log(newMessage.name);
    console.log(newMessage.title);
    console.log(newMessage.type);
    console.log(newMessage.body);
    console.log(newMessage);

    messages.push(newMessage)
      
    Session.set('messages', messages)
      
  }
})
    
 Session.set('messages', messages);

Template.messageList.events({
  'click .block': function (event) {
    Session.set('messageIndex', $(event.currentTarget).index())
  },
  'mouseenter .block': function (event) {
    Session.set('messageIndex', $(event.currentTarget).index())
  }
})

Session.set('messages', messages);

Session.set('messageIndex', 1)





// var newMessage = {
//   name: "Heng LI",
//   title: "my new message",
//   type:"Work",
//   body: "blasdf "
// }





// Template.inputMessage.events({
//   'click .add': function(){
//     newMessage = new Object();
//     newMessage.name=$('input[name=name]').val(),
//     newMessage.title=$('input[name=title]').val(),
//     newMessage.type=$('input[name=type]').val(),
//     newMessage.body=$('textarea[name=body]').val()



