export default http => ({
  async updateDaily(input, edit_date) {
    const { data: { data: { dailyChatStatistics } } } = await http({
      data: {
        query: `mutation($input: ChatStatisticsInput!, $edit_date: Date) {
          dailyChatStatistics(input: $input, edit_date: $edit_date)
        }`,
        variables: {
          input,
          edit_date,
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
