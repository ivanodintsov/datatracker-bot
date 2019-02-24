export default http => ({
  async updateDaily(input) {
    const { data: { data: { dailyChatStatistics } } } = await http({
      data: {
        query: `mutation($input: ChatStatisticsInput!) {
          dailyChatStatistics(input: $input)
        }`,
        variables: {
          input
        }
      }
    });

    return dailyChatStatistics;
  },

  async chatStatistics(id) {
    const { data: { data: { chatStatistics } } } = await http({
      data: {
        query: `query($id: Float!) {
          chatStatistics(id: $id) {
            text
            voice
            video_note
            video
            sticker
            pinned
            audio
            document
            photo
            reply
            forward
            edit
            contact
            location
            game
          }
        }`,
        variables: { id }
      }
    });
  
    return chatStatistics;
  }  
});
