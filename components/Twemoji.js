import kebabCase from '@/lib/utils/kebabCase'

const Twemoji = ({ emoji, size = 'twa-lg', className }) => {
  let cls = `twa ${size} twa-${kebabCase(emoji)} ${className || ''}`
  return <i className={cls.trim()} />
}

export default Twemoji
