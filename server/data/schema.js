export const Schema = [`
  #declare custom scalars
  scalar Date
  
  # a group chat entity
  type Group {
    id: Int! # unique id for the group
    name: String # name of the group
    users: [User]! # users in the group
    messages: [Message] # messages sent to the group
  }
  # a user -- keep type really simple for now
  type User {
    id: Int! # unique id for the user
    email: String! # we will also require a unique email
    username: String # name shown to users
    messages: [Message] # messages sent by the user
    groups: [Group] # groups the user belongs to
    friends: [User] # user's friends/contacts
  }
  type Message {
    id: Int! #unique id for the message
    to: Group! # group that the message was sent to
    from: User! # user who sent the message
    text: String! # message text
    createdAt: Date! # when message was created
  }
  type Query {
    user(email: String, id: Int): User
    group(id: Int!): Group
    messages(groupId: Int, userId: Int): [Message]
  }
  schema {
    query: Query
  }


  `];