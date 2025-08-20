const getIdFromLabel = (label) => {
  return label
    .toLocaleLowerCase()
    .replaceAll(' ', '-')
}
export default getIdFromLabel