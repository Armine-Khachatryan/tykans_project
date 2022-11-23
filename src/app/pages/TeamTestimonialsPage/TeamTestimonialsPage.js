import React, {useState} from "react";
import axios from "axios";
import config from "../../config";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamTestFirstPart from "../../components/TeamTest/TeamTestFirstPart/TeamTestFirstPart";
import TeamTestMembers from "../../components/TeamTest/TeamTestMembers/TeamTestMembers";
import TeamTestLastPart from "../../components/TeamTest/TeamTestLastPart/TeamTestLastPart";



function TeamTestimonialsPage () {

    const [teamInfo,setTeamInfo]=useState([])
    //     [
    //     {
    //     {
    //         "key": "cpvdt5eUpE0rYp7a",
    //         "layout": "Content",
    //         "attributes": {
    //             "image": "ujZCnlvi5fPmiU8n6vs87LB8aAii2hvsffPrUxma.png",
    //             "title": "Team Testimonials"
    //         }
    //     },
    //     {
    //         "key": "ctpwSHscue7nqXrJ",
    //         "layout": "MembersBlock",
    //         "attributes": {
    //             "memberinfo": "Tykans has been the most positive work environment that I have had the opportunity to be in. I \" +\n" +
    //                 "    //             \"am extremely thankful to be part of such an amazing team, who I can count on as being my work family",
    //             "membername": "test",
    //             "memberphoto": "rAk2v4ehX4tcF4tbL4XbaGjKslptBowsHoA3tNlP.png",
    //             "memberposition": "test"
    //         }
    //     },
    //     {
    //         "key": "csqYSmK4HiF0OZqX",
    //         "layout": "MembersBlock",
    //         "attributes": {
    //             "memberinfo": "test1",
    //             "membername": "test1",
    //             "memberphoto": "6GwHq5SCZJySjC3edPbw9iD103DXbxJwzNGGasnz.png",
    //             "memberposition": "test1"
    //         }
    //     },
    //     {
    //         "key": "c4XxLsierVjAK8Qw",
    //         "layout": "MembersBlock",
    //         "attributes": {
    //             "memberinfo": "fasdfasdf",
    //             "membername": "sdafsad",
    //             "memberphoto": "WlSiZVzi6j7A3XGLqulsA2yt5Ygdgq8n23FUZiF8.png",
    //             "memberposition": "sdafsadf"
    //         }
    //     }
    // ])

    console.log(teamInfo, "teamInfo")

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);


    useEffect(() => {
        getTeamData()
    },[]);

    // const dt=[
    //     {
    //         "key": "cpvdt5eUpE0rYp7a",
    //         "layout": "Content",
    //         "attributes": {
    //             "image": "ujZCnlvi5fPmiU8n6vs87LB8aAii2hvsffPrUxma.png",
    //             "title": "Team Member"
    //         }
    //     },
    //     {
    //         "key": "ctpwSHscue7nqXrJ",
    //         "layout": "MembersBlock",
    //         "attributes": {
    //             "memberinfo": "test",
    //             "membername": "test",
    //             "memberphoto": "rAk2v4ehX4tcF4tbL4XbaGjKslptBowsHoA3tNlP.png",
    //             "memberposition": "test"
    //         }
    //     },
    //     {
    //         "key": "csqYSmK4HiF0OZqX",
    //         "layout": "MembersBlock",
    //         "attributes": {
    //             "memberinfo": "test1",
    //             "membername": "test1",
    //             "memberphoto": "6GwHq5SCZJySjC3edPbw9iD103DXbxJwzNGGasnz.png",
    //             "memberposition": "test1"
    //         }
    //     },
    //     {
    //         "key": "c4XxLsierVjAK8Qw",
    //         "layout": "MembersBlock",
    //         "attributes": {
    //             "memberinfo": "fasdfasdf",
    //             "membername": "sdafsad",
    //             "memberphoto": "WlSiZVzi6j7A3XGLqulsA2yt5Ygdgq8n23FUZiF8.png",
    //             "memberposition": "sdafsadf"
    //         }
    //     }
    // ]


    let getTeamData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages/team-members`)
            console.log(response.data, "aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            setTeamInfo(response.data.content);

        } catch (error) {
            console.log(teamInfo)
            console.log(error);
            console.log(error.response, 'getProfileInfoError');
        }
    }

    return (
        <>
            <Header/>
            <TeamTestFirstPart teamInfo={teamInfo}/>
            <TeamTestMembers teamInfo={teamInfo}/>
            <TeamTestLastPart/>
            <Footer/>
        </>
    )
}

export default TeamTestimonialsPage;