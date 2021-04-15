import React, { ReactNode } from "react";

// export class Person extends Component {

//     public userName: string = "Armand";

//     render() {
//         return (
//           <div className="App">
//             <h2>Hallo! Ik ben {this.userName} :D</h2>
//           </div>
//         );
//     }
// }

export type PersonInfo = {
    id: number,
    name: string
}

type PersonProps = {
    children?: ReactNode,
    personInfo: PersonInfo
}
const Person = ({personInfo, children}: PersonProps) => {
    if (!children) {
        return <div>Hoi</div>
    }

    return (
        <div className="Person">
            <h2>Hallo! Ik ben {personInfo.name} :D</h2>
            <h3>Mijn id is: {personInfo.id}</h3>
            {children}
        </div>
    );
}

export default Person;