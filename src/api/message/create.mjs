export default http => async message => await http({
  data: {
    query: `mutation($message: MessageInput!) {
      createMessage(input: $message) {
        _id
      }
    }`,
    variables: {
      message
    }
  }
});
