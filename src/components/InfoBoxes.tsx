import Link from 'next/link'
import InfoBox, { InfoBoxProps } from './InfoBox'

const INFO: InfoBoxProps[] = [
  {
    title: 'For Renters',
    text: 'Find your dream rental property. Bookmark properties and contact owners.',
    bgColor: 'bg-gray-100',
    linkText: 'Browse Properties',
    link: '/properties'
  },
  {
    title: 'For Property Owners',
    text: 'List your properties and reach potential tenants. Rent as an airbnb or long term.',
    bgColor: 'bg-blue-100',
    linkText: 'Add Property',
    link: '/properties/add'
  }
]

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          {INFO?.map((info) => (
            <InfoBox key={info.title} {...info} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes
