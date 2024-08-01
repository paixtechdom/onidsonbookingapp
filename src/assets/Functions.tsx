export const formatId = (id: string) => {
  return id.trim()
          .replace("-","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace(" ","")
          .replace("&","")
          .replace(".","")
          .replace("/","")
          .replace("'","")
          .replace(":","")
}


export  const ArrayFromNumber = (num: number): number[] => {
    return Array.from({length: num}, (_, i) => i + 1)
  }

export const FormatPrice = (num: number): any => {
  let formatedString = ""
  num.toString().split('').reverse().forEach((a, i) => 
    formatedString += (i) % 3 == 0 && i !== 0 ? `,${a}` : a
)

  return formatedString.split('').reverse()
}