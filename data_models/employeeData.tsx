// interface client {
//     name: string,
//     industry: string
// }

import internal from "stream";

export default interface employeeData {
    name: string,
    location: string,
    // client: client
    hoursPerWeek: number,
    interests: Array<string>
    skills: Array<string>
    travel: number
    typeOfContract: string
}
