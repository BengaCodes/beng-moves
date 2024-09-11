import Link from 'next/link'

export type InfoBoxProps = {
  title: string
  text: string
  bgColor: string
  linkText: string
  link: string
}

const InfoBox = ({ title, text, bgColor, linkText, link }: InfoBoxProps) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='mt-2 mb-4'>{text}</p>
      <Link
        href={link}
        className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
      >
        {linkText}
      </Link>
    </div>
  )
}

export default InfoBox
