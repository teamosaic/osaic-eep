import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

import MarketingPortableText from '~/components/global/portableText/MarketingPortableText'
import AnimateInView from '~/packages/animate-in-view'
import { Faq,FaqBlock as BlockType } from '~/types'


export default function FaqBlock({
  title,
  faqs,
}: BlockType): ReactNode {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">{title}</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <FaqAccordion {...faq} key={ faq._key } />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function FaqAccordion({ question, answer }: Faq): ReactNode {
  return (
    <Disclosure as="div" className="pt-6">
      {({ open }) => (
        <>

          {/* Question and toggle bar */}
          <dt>
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
              <span className="text-base font-semibold leading-7">
                {question}
              </span>
              <span className="ml-6 flex h-7 items-center">
                <ToggleIcon open={ open } />
              </span>
            </Disclosure.Button>
          </dt>

          {/* Collapsable answer */}
          <Disclosure.Panel as="dd" className="mt-2 pr-12">
            <AnimateInView
              target='descendants'
              className='prose-animate-in text-white'>
              <MarketingPortableText value={ answer }/>
            </AnimateInView>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  )
}

function ToggleIcon({ open }: { open: boolean}): ReactNode {
  if (open) return <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
  return <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
}
