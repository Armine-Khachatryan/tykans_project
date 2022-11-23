import React from "react";
import Person1 from '../../../assets/images/teamTestImages/Person1.png';
import Person2 from '../../../assets/images/teamTestImages/Person2.png';
import Person3 from '../../../assets/images/teamTestImages/Person3.png';
import Person4 from '../../../assets/images/teamTestImages/Person4.png';
import Person5 from '../../../assets/images/teamTestImages/Person5.png';
import Person6 from '../../../assets/images/teamTestImages/Person6.png';
import Person7 from '../../../assets/images/teamTestImages/Person7.png';
import Person8 from '../../../assets/images/teamTestImages/Person8.png';
import Person9 from '../../../assets/images/teamTestImages/Person9.png';
import classes from './TeamTestMembers.module.css';


function TeamTestMembers (props){
console.log(props)
const allMember = props.teamInfo?.slice(1);
console.log(allMember, "aksjhakhs")
//
//     // const allMembers=[
//     //     {
//     //         memberPhoto:Person1,
//     //         memberName:"Lacey",
//     //         memberPosition:"Administartive Assistant",
//     //         memberInfo:"Tykans has been the most positive work environment that I have had the opportunity to be in. I " +
//     //             "am extremely thankful to be part of such an amazing team, who I can count on as being my work family…"
//     // },
//     //     {
//     //         memberPhoto:Person2,
//     //         memberName:"Kevin",
//     //         memberPosition:"Reporting Specialist",
//     //         memberInfo:"The time I’ve been with Tykans so far has been great. They truly make you feel like a family. " +
//     //             "The environment has always been positive and kind – very easy to work in."
//     //     },
//     //     {
//     //         memberPhoto:Person3,
//     //         memberName:"Cher",
//     //         memberPosition:"Financial Controller",
//     //         memberInfo:"Tykans supports my professional and personal development. Tykans loves me the way I am."
//     //     },
//     //     {
//     //         memberPhoto:Person4,
//     //         memberName:"Courtney",
//     //         memberPosition:"Financial Accountant",
//     //         memberInfo:"The people at Tykans are extremely welcoming, supportive, and friendly. They are at the " +
//     //             "core of why Tykans is great. It is so refreshing to work for a company who puts its people and " +
//     //             "culture first. I feel fortunate to work for a company that wants to utilize my skills, help " +
//     //             "encourage and support me in developing new skills, and build my professional career around my" +
//     //             " passions. Work at Tykans is challenging, with a high level of expectation and everyone performing" +
//     //             " their duties with excellence. Yet, every holiday, staff event, milestone, and birthday is truly" +
//     //             " celebrated with full of fun."
//     //     },
//     //     {
//     //         memberPhoto:Person5,
//     //         memberName:"Raza",
//     //         memberPosition:"Genesys Application Specialist",
//     //         memberInfo:"It’s been almost a year working with Tykans, and I love the way the team supports each other" +
//     //             " and help to accomplish company milestones. I strongly recommend others join Tykans who are looking " +
//     //             "to work in a collaborative and friendly environment."
//     //     },
//     //     {
//     //         memberPhoto: Person6,
//     //         memberName: "Anna",
//     //         memberPosition: "Managing Partner & CEO",
//     //         memberInfo: "It’s an incredible experience, and so inspiring being among the most passionate and brilliant" +
//     //             " people. Every day feels like an amazing and very fulfilling journey of like-minded people joining " +
//     //             "together to solve complex technical challenges that emerge from the dreams of our extraordinary " +
//     //             "customers. It is absolutely stunning to watch the solutions coming alive as we all work together to" +
//     //             " make ideas possible. I love every moment of being here and cherish everyone working here."
//     //     },
//     //     {
//     //         memberPhoto:Person7,
//     //         memberName:"Evan ",
//     //         memberPosition:"Application Development Specialist",
//     //         memberInfo:"Everyone is extremely nice, and the family-like environment makes working here much more" +
//     //             " enticing than other companies. There is also plenty of opportunity to grow and learn more while" +
//     //             " you are at work."
//     //     },
//     //     {
//     //         memberPhoto:Person8,
//     //         memberName:"Ninette",
//     //         memberPosition:"Senior Application Specialist",
//     //         memberInfo:"Tykans is a fun place to work for, and everyone is very friendly. Great team and leadership, " +
//     //             "and I am always learning new things. They believe in the strength of their people."
//     //     },
//     //     {
//     //         memberPhoto:Person9,
//     //         memberName:"Ying",
//     //         memberPosition:"People and Culture Specialist",
//     //         memberInfo:"It’s the most fun workplace that I have ever worked in. I feel that the experience of " +
//     //             "working at Tykans is livelier than just work. Everyday is different and full of new challenges to " +
//     //             "explore"
//     //     }
//     // ]
    const renderPersonInfo=allMember.map((item,index)=>(
        <div className="teamMemberOne" key={index}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6667 33.3333C20.9233 33.3333 20.21 33.4467 19.5 33.55C19.73 32.7767 19.9667 31.99 20.3467 31.2833C20.7267 30.2567 21.32 29.3667 21.91 28.47C22.4033 27.5 23.2733 26.8433 23.9133 26.0133C24.5833 25.2067 25.4967 24.67 26.22 24C26.93 23.3 27.86 22.95 28.6 22.4567C29.3733 22.0133 30.0467 21.5233 30.7667 21.29L32.5633 20.55L34.1433 19.8933L32.5267 13.4333L30.5367 13.9133C29.9 14.0733 29.1233 14.26 28.24 14.4833C27.3367 14.65 26.3733 15.1067 25.3 15.5233C24.24 15.9967 23.0133 16.3167 21.8733 17.0767C20.7267 17.8033 19.4033 18.41 18.2367 19.3833C17.1067 20.3867 15.7433 21.2567 14.7367 22.5333C13.6367 23.7267 12.55 24.98 11.7067 26.4067C10.73 27.7667 10.0667 29.26 9.36666 30.7367C8.73333 32.2133 8.22333 33.7234 7.80666 35.19C7.01666 38.13 6.66333 40.9234 6.52666 43.3134C6.41333 45.7067 6.48 47.6967 6.62 49.1367C6.67 49.8167 6.76333 50.4767 6.83 50.9333L6.91333 51.4933L7 51.4734C7.59287 54.2428 8.95767 56.7878 10.9365 58.8139C12.9154 60.8401 15.4275 62.2647 18.1821 62.9228C20.9368 63.5809 23.8215 63.4457 26.5025 62.5328C29.1835 61.6199 31.5513 59.9667 33.332 57.7643C35.1127 55.5619 36.2335 52.9004 36.5647 50.0877C36.896 47.2749 36.4241 44.4259 35.2038 41.8701C33.9834 39.3143 32.0645 37.1562 29.6688 35.6455C27.2732 34.1348 24.4988 33.3332 21.6667 33.3333ZM58.3333 33.3333C57.59 33.3333 56.8767 33.4467 56.1667 33.55C56.3967 32.7767 56.6333 31.99 57.0133 31.2833C57.3933 30.2567 57.9867 29.3667 58.5767 28.47C59.07 27.5 59.94 26.8433 60.58 26.0133C61.25 25.2067 62.1633 24.67 62.8867 24C63.5967 23.3 64.5267 22.95 65.2667 22.4567C66.04 22.0133 66.7133 21.5233 67.4333 21.29L69.23 20.55L70.81 19.8933L69.1933 13.4333L67.2033 13.9133C66.5667 14.0733 65.79 14.26 64.9067 14.4833C64.0033 14.65 63.04 15.1067 61.9667 15.5233C60.91 16 59.68 16.3167 58.54 17.08C57.3933 17.8067 56.07 18.4133 54.9033 19.3867C53.7733 20.39 52.41 21.26 51.4033 22.5333C50.3033 23.7267 49.2167 24.98 48.3733 26.4067C47.3967 27.7667 46.7333 29.26 46.0333 30.7367C45.4 32.2133 44.89 33.7234 44.4733 35.19C43.6833 38.13 43.33 40.9234 43.1933 43.3134C43.08 45.7067 43.1467 47.6967 43.2867 49.1367C43.3367 49.8167 43.43 50.4767 43.4967 50.9333L43.58 51.4933L43.6667 51.4734C44.2595 54.2428 45.6243 56.7878 47.6032 58.8139C49.5821 60.8401 52.0941 62.2647 54.8488 62.9228C57.6035 63.5809 60.4881 63.4457 63.1692 62.5328C65.8502 61.6199 68.218 59.9667 69.9987 57.7643C71.7794 55.5619 72.9001 52.9004 73.2314 50.0877C73.5626 47.2749 73.0908 44.4259 71.8704 41.8701C70.6501 39.3143 68.7311 37.1562 66.3355 35.6455C63.9399 34.1348 61.1655 33.3332 58.3333 33.3333Z" fill="#B96118"/>
            </svg>
            <div className="memberInfoMiddlePart">
                <div className="memberProfileInfo">
                    <div className="memberPhotoDiv">
                        {/*<img className="memberPhoto" src={item.attributes.memberphoto}/>*/}
                    </div>
                    <div className="memberName">{item.membername}</div>
                    <div className="memberPosition">{item.memberposition}</div>
                </div>
                <div className="memberInfo">{item.memberinfo}</div>
            </div>
            <svg className="alignRightMember" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.3329 46.6669C59.0762 46.6669 59.7895 46.5536 60.4995 46.4502C60.2695 47.2236 60.0328 48.0102 59.6528 48.7169C59.2728 49.7436 58.6795 50.6336 58.0895 51.5302C57.5962 52.5002 56.7262 53.1569 56.0862 53.9869C55.4162 54.7936 54.5028 55.3302 53.7795 56.0002C53.0695 56.7002 52.1395 57.0502 51.3995 57.5436C50.6262 57.9869 49.9529 58.4769 49.2329 58.7102L47.4362 59.4502L45.8562 60.1069L47.4728 66.5669L49.4628 66.0869C50.0995 65.9269 50.8762 65.7402 51.7595 65.5169C52.6628 65.3502 53.6262 64.8936 54.6995 64.4769C55.7595 64.0036 56.9862 63.6836 58.1262 62.9236C59.2729 62.1969 60.5962 61.5902 61.7628 60.6169C62.8928 59.6136 64.2562 58.7436 65.2629 57.4669C66.3629 56.2736 67.4495 55.0202 68.2928 53.5936C69.2695 52.2336 69.9329 50.7402 70.6329 49.2636C71.2662 47.7869 71.7762 46.2769 72.1929 44.8102C72.9829 41.8702 73.3362 39.0769 73.4729 36.6869C73.5862 34.2936 73.5195 32.3036 73.3795 30.8636C73.3295 30.1836 73.2362 29.5236 73.1695 29.0669L73.0862 28.5069L72.9995 28.5269C72.4066 25.7575 71.0418 23.2125 69.063 21.1863C67.0841 19.1601 64.572 17.7356 61.8174 17.0775C59.0627 16.4194 56.178 16.5546 53.497 17.4674C50.816 18.3803 48.4482 20.0336 46.6675 22.2359C44.8868 24.4383 43.766 27.0998 43.4348 29.9126C43.1036 32.7253 43.5754 35.5744 44.7957 38.1302C46.0161 40.6859 47.9351 42.844 50.3307 44.3547C52.7263 45.8654 55.5007 46.6671 58.3329 46.6669ZM21.6662 46.6669C22.4095 46.6669 23.1229 46.5536 23.8329 46.4502C23.6029 47.2236 23.3662 48.0102 22.9862 48.7169C22.6062 49.7436 22.0129 50.6336 21.4229 51.5302C20.9295 52.5002 20.0595 53.1569 19.4195 53.9869C18.7495 54.7936 17.8362 55.3302 17.1129 56.0002C16.4029 56.7002 15.4729 57.0502 14.7329 57.5436C13.9595 57.9869 13.2862 58.4769 12.5662 58.7102L10.7695 59.4502L9.18952 60.1069L10.8062 66.5669L12.7962 66.0869C13.4329 65.9269 14.2095 65.7402 15.0928 65.5169C15.9962 65.3502 16.9595 64.8936 18.0329 64.4769C19.0895 64.0002 20.3195 63.6836 21.4595 62.9202C22.6062 62.1936 23.9295 61.5869 25.0962 60.6136C26.2262 59.6102 27.5895 58.7402 28.5962 57.4669C29.6962 56.2736 30.7829 55.0202 31.6262 53.5936C32.6029 52.2336 33.2662 50.7402 33.9662 49.2636C34.5995 47.7869 35.1095 46.2769 35.5262 44.8102C36.3162 41.8702 36.6695 39.0769 36.8062 36.6869C36.9195 34.2936 36.8529 32.3036 36.7129 30.8636C36.6629 30.1836 36.5695 29.5236 36.5029 29.0669L36.4195 28.5069L36.3329 28.5269C35.74 25.7575 34.3752 23.2125 32.3963 21.1863C30.4174 19.1601 27.9054 17.7356 25.1507 17.0775C22.3961 16.4194 19.5114 16.5546 16.8303 17.4674C14.1493 18.3803 11.7815 20.0336 10.0008 22.2359C8.22016 24.4383 7.09937 27.0998 6.76813 29.9126C6.43689 32.7253 6.90874 35.5744 8.12908 38.1301C9.34942 40.6859 11.2684 42.844 13.664 44.3547C16.0596 45.8654 18.834 46.6671 21.6662 46.6669Z" fill="#B96118"/>
            </svg>
        </div>
    ))

    return(
        <div className={classes.teamTestWhole}>
            {renderPersonInfo}
        </div>
    )
}


export default TeamTestMembers;


//
// const renderPersonInfo=allMembers.map((item,index)=>(
//     <div className="teamMemberOne">
//         <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M21.6667 33.3333C20.9233 33.3333 20.21 33.4467 19.5 33.55C19.73 32.7767 19.9667 31.99 20.3467 31.2833C20.7267 30.2567 21.32 29.3667 21.91 28.47C22.4033 27.5 23.2733 26.8433 23.9133 26.0133C24.5833 25.2067 25.4967 24.67 26.22 24C26.93 23.3 27.86 22.95 28.6 22.4567C29.3733 22.0133 30.0467 21.5233 30.7667 21.29L32.5633 20.55L34.1433 19.8933L32.5267 13.4333L30.5367 13.9133C29.9 14.0733 29.1233 14.26 28.24 14.4833C27.3367 14.65 26.3733 15.1067 25.3 15.5233C24.24 15.9967 23.0133 16.3167 21.8733 17.0767C20.7267 17.8033 19.4033 18.41 18.2367 19.3833C17.1067 20.3867 15.7433 21.2567 14.7367 22.5333C13.6367 23.7267 12.55 24.98 11.7067 26.4067C10.73 27.7667 10.0667 29.26 9.36666 30.7367C8.73333 32.2133 8.22333 33.7234 7.80666 35.19C7.01666 38.13 6.66333 40.9234 6.52666 43.3134C6.41333 45.7067 6.48 47.6967 6.62 49.1367C6.67 49.8167 6.76333 50.4767 6.83 50.9333L6.91333 51.4933L7 51.4734C7.59287 54.2428 8.95767 56.7878 10.9365 58.8139C12.9154 60.8401 15.4275 62.2647 18.1821 62.9228C20.9368 63.5809 23.8215 63.4457 26.5025 62.5328C29.1835 61.6199 31.5513 59.9667 33.332 57.7643C35.1127 55.5619 36.2335 52.9004 36.5647 50.0877C36.896 47.2749 36.4241 44.4259 35.2038 41.8701C33.9834 39.3143 32.0645 37.1562 29.6688 35.6455C27.2732 34.1348 24.4988 33.3332 21.6667 33.3333ZM58.3333 33.3333C57.59 33.3333 56.8767 33.4467 56.1667 33.55C56.3967 32.7767 56.6333 31.99 57.0133 31.2833C57.3933 30.2567 57.9867 29.3667 58.5767 28.47C59.07 27.5 59.94 26.8433 60.58 26.0133C61.25 25.2067 62.1633 24.67 62.8867 24C63.5967 23.3 64.5267 22.95 65.2667 22.4567C66.04 22.0133 66.7133 21.5233 67.4333 21.29L69.23 20.55L70.81 19.8933L69.1933 13.4333L67.2033 13.9133C66.5667 14.0733 65.79 14.26 64.9067 14.4833C64.0033 14.65 63.04 15.1067 61.9667 15.5233C60.91 16 59.68 16.3167 58.54 17.08C57.3933 17.8067 56.07 18.4133 54.9033 19.3867C53.7733 20.39 52.41 21.26 51.4033 22.5333C50.3033 23.7267 49.2167 24.98 48.3733 26.4067C47.3967 27.7667 46.7333 29.26 46.0333 30.7367C45.4 32.2133 44.89 33.7234 44.4733 35.19C43.6833 38.13 43.33 40.9234 43.1933 43.3134C43.08 45.7067 43.1467 47.6967 43.2867 49.1367C43.3367 49.8167 43.43 50.4767 43.4967 50.9333L43.58 51.4933L43.6667 51.4734C44.2595 54.2428 45.6243 56.7878 47.6032 58.8139C49.5821 60.8401 52.0941 62.2647 54.8488 62.9228C57.6035 63.5809 60.4881 63.4457 63.1692 62.5328C65.8502 61.6199 68.218 59.9667 69.9987 57.7643C71.7794 55.5619 72.9001 52.9004 73.2314 50.0877C73.5626 47.2749 73.0908 44.4259 71.8704 41.8701C70.6501 39.3143 68.7311 37.1562 66.3355 35.6455C63.9399 34.1348 61.1655 33.3332 58.3333 33.3333Z" fill="#B96118"/>
//         </svg>
//         <div className="memberInfoMiddlePart">
//             <div className="memberProfileInfo">
//                 <div className="memberPhotoDiv">
//                     <img className="memberPhoto" src={item.memberPhoto}/>
//                 </div>
//                 <div className="memberName">{item.memberName}</div>
//                 <div className="memberPosition">{item.memberPosition}</div>
//             </div>
//             <div className="memberInfo">{item.memberInfo}</div>
//         </div>
//         <svg className="alignRightMember" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M58.3329 46.6669C59.0762 46.6669 59.7895 46.5536 60.4995 46.4502C60.2695 47.2236 60.0328 48.0102 59.6528 48.7169C59.2728 49.7436 58.6795 50.6336 58.0895 51.5302C57.5962 52.5002 56.7262 53.1569 56.0862 53.9869C55.4162 54.7936 54.5028 55.3302 53.7795 56.0002C53.0695 56.7002 52.1395 57.0502 51.3995 57.5436C50.6262 57.9869 49.9529 58.4769 49.2329 58.7102L47.4362 59.4502L45.8562 60.1069L47.4728 66.5669L49.4628 66.0869C50.0995 65.9269 50.8762 65.7402 51.7595 65.5169C52.6628 65.3502 53.6262 64.8936 54.6995 64.4769C55.7595 64.0036 56.9862 63.6836 58.1262 62.9236C59.2729 62.1969 60.5962 61.5902 61.7628 60.6169C62.8928 59.6136 64.2562 58.7436 65.2629 57.4669C66.3629 56.2736 67.4495 55.0202 68.2928 53.5936C69.2695 52.2336 69.9329 50.7402 70.6329 49.2636C71.2662 47.7869 71.7762 46.2769 72.1929 44.8102C72.9829 41.8702 73.3362 39.0769 73.4729 36.6869C73.5862 34.2936 73.5195 32.3036 73.3795 30.8636C73.3295 30.1836 73.2362 29.5236 73.1695 29.0669L73.0862 28.5069L72.9995 28.5269C72.4066 25.7575 71.0418 23.2125 69.063 21.1863C67.0841 19.1601 64.572 17.7356 61.8174 17.0775C59.0627 16.4194 56.178 16.5546 53.497 17.4674C50.816 18.3803 48.4482 20.0336 46.6675 22.2359C44.8868 24.4383 43.766 27.0998 43.4348 29.9126C43.1036 32.7253 43.5754 35.5744 44.7957 38.1302C46.0161 40.6859 47.9351 42.844 50.3307 44.3547C52.7263 45.8654 55.5007 46.6671 58.3329 46.6669ZM21.6662 46.6669C22.4095 46.6669 23.1229 46.5536 23.8329 46.4502C23.6029 47.2236 23.3662 48.0102 22.9862 48.7169C22.6062 49.7436 22.0129 50.6336 21.4229 51.5302C20.9295 52.5002 20.0595 53.1569 19.4195 53.9869C18.7495 54.7936 17.8362 55.3302 17.1129 56.0002C16.4029 56.7002 15.4729 57.0502 14.7329 57.5436C13.9595 57.9869 13.2862 58.4769 12.5662 58.7102L10.7695 59.4502L9.18952 60.1069L10.8062 66.5669L12.7962 66.0869C13.4329 65.9269 14.2095 65.7402 15.0928 65.5169C15.9962 65.3502 16.9595 64.8936 18.0329 64.4769C19.0895 64.0002 20.3195 63.6836 21.4595 62.9202C22.6062 62.1936 23.9295 61.5869 25.0962 60.6136C26.2262 59.6102 27.5895 58.7402 28.5962 57.4669C29.6962 56.2736 30.7829 55.0202 31.6262 53.5936C32.6029 52.2336 33.2662 50.7402 33.9662 49.2636C34.5995 47.7869 35.1095 46.2769 35.5262 44.8102C36.3162 41.8702 36.6695 39.0769 36.8062 36.6869C36.9195 34.2936 36.8529 32.3036 36.7129 30.8636C36.6629 30.1836 36.5695 29.5236 36.5029 29.0669L36.4195 28.5069L36.3329 28.5269C35.74 25.7575 34.3752 23.2125 32.3963 21.1863C30.4174 19.1601 27.9054 17.7356 25.1507 17.0775C22.3961 16.4194 19.5114 16.5546 16.8303 17.4674C14.1493 18.3803 11.7815 20.0336 10.0008 22.2359C8.22016 24.4383 7.09937 27.0998 6.76813 29.9126C6.43689 32.7253 6.90874 35.5744 8.12908 38.1301C9.34942 40.6859 11.2684 42.844 13.664 44.3547C16.0596 45.8654 18.834 46.6671 21.6662 46.6669Z" fill="#B96118"/>
//         </svg>
//     </div>
// ))
//
// return(
//     <div className={classes.teamTestWhole}>
//         {renderPersonInfo}
//     </div>
// )
// }
//
//
// export default TeamTestMembers;