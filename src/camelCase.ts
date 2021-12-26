const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

const camelCase = (name: string): string => {
  return name
    .replace(SPECIAL_CHARS_REGEXP, (_, letter, offset) => (offset ? letter.toUpperCase() : letter))
    .replace(MOZ_HACK_REGEXP, 'Moz$1')
}

export default camelCase
