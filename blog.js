if (Meteor.isClient) {

  // Template.blog.helpers({
  //   blogs : [

  //   {title: 'First', 'body': 'First body'},
  //   {title: 'Second', 'body': 'Second body'},
  //   {title: 'Third', 'body': 'Third body'}

  //   ]
  // });

  Template.blog.events({
    'click #submit': function(event, template) {
      event.preventDefault();
      var title = template.find('#title').value;
      var body = template.find('#body').value;

      Meteor.call('createNewBlog', title, body);
    }
  });

  Template.blog.blogs = function() {
    return Blogs.find();
  }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.methods({
      'createNewBlog' : function(title,body) {
        console.log('blog title', title);
        console.log('blog body', body)

        Blogs.insert({
          title: title,
          body: body
        });
      }
    });
  });
}
