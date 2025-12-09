import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '34mqmx5c',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    appId: 'ymfndcngru5fisx9ericrtnq',
    autoUpdates: true,
  }
})
