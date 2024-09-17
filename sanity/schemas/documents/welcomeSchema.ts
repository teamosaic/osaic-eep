export const welcomeSchema = {
  name: 'welcome',
  type: 'document',
  title: 'Welcome',

  fields: [
    {
      name: 'heading',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Welcome'
      }
    }
  }
}
