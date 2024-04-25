export const xTimeAgo = (xYear=0, xMonth = 0, xDay = 0) => {
    const currentDate = new Date()
    // Year
    const yyyy = currentDate.getFullYear() - xYear

    // Month
    const monthArr = ['01','02','03','04','05','06','07','08','09','10','11','12']
    const monthIndex = currentDate.getMonth()
    const mm = monthArr[monthIndex-xMonth]

    // Day
    const dd = currentDate.getDay() - xDay

    return (`${yyyy}-${mm}-${dd}`)
}

export default xTimeAgo