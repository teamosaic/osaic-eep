import { useLiveQuery } from 'next-sanity/preview'

import { getSettings } from '~/queries/settingsQueries'

import PreviewControls from './preview-controls/PreviewControls'

// Fetch preview data from Sanity and then pass it to child components
export default function PreviewLoader({ initialData, query, params, render }) {

  // Load draft data
  const [ page, pageLoading ] = useLiveQuery(initialData.page, query, params)
  const [ settings, settingsLoading ] = useLiveQuery(initialData.settings,
    getSettings)

  // Render placeholder if loading
  if (pageLoading || settingsLoading) {
    return <Placeholder />
  }

  // Pass draft data to children components
  return (
    <>
      <PreviewControls />
      { render({ page, settings }) }
    </>
  )
}

function Placeholder() {
  return (
    <div className='grid h-screen place-items-center p-8'>
      <div className='flex'>
        <span className='mr-2'>Loading Preview</span>
        <Spinner />
      </div>
    </div>
  )
}

// https://github.com/n3r4zzurr0/svg-spinners
function Spinner() {
  return (
    <svg
      className='animate-spin'
      width='24' height='24' viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z' fill='currentColor' />
    </svg>
  )
}
