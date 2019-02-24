import getId from '../helpers/getId';

export default http => async member => {
  const { data: { data: { newChatMember } } } = await http({
    data: {
      query: `mutation($member: ChatMemberInput!) {
        newChatMember(input: $member) {
          _id
        }
      }`,
      variables: {
        member
      }
    }
  });

  return getId(newChatMember);
};
