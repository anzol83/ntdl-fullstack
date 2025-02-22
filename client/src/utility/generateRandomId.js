// Function to genrate random unique id
export const generateRandomId = () => {
  const idString = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890"

  let id = ""

  for(let i=0; i<=6; i++){
    const randomPosition = Math.floor(Math.random() * idString.length)

    id+= idString[randomPosition]
  }

  return id
}