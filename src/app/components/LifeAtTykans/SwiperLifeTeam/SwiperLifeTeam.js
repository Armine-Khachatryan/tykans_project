import { Swiper,  SwiperSlide } from 'swiper/react';
import {useNavigate} from "react-router-dom";
import { Pagination, Navigation } from "swiper";
import classes from './SwiperLifeTeam.module.css';
import 'swiper/css';
import UpComa from '../../../assets/images/lifeEtTykans/UpComa.png';
import AvatarLife from "../../../assets/images/lifeEtTykans/AvatarLife.png";
import Avatar2 from '../../../assets/images/lifeEtTykans/Avatar2.png';
import Button from "../../../UI/Button/Button";
import DownComa from "../../../assets/images/lifeEtTykans/DownComa.png";
import React from "react";





export default function SwiperLifeTeam (){

    const navigate= useNavigate();


    return (
        <Swiper
            spaceBetween={24}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            modules={[ Pagination, Navigation]}
            navigation={true}
            mousewheel={true}
            keyboard={true}
        >
            <SwiperSlide>
                <div className={classes.wholeMembers}>
                    <img className={classes.upComa} src={UpComa}/>
                    <div className={classes.memberInfo}>
                        <div className={classes.member}>
                            <div className={classes.personIfo}>
                                <img src={AvatarLife}/>
                                <div className={classes.personName}>Lacey</div>
                                <div className={classes.personPosition}>Administartive Assistant</div>
                            </div>
                        </div>
                        <div className={classes.textAndButtons}>
                            <div className={classes.textInfo}>Tykans has been the most positive work environment that I have
                                had the opportunity to be in. I am extremely thankful to be part of such an amazing team, who
                                I can count on as being my work family…</div>
                            <div className={classes.buttonsLife}>
                                <div className={classes.firstButton}>
                                    <Button color='#B96118' OnClick={()=>navigate(`/team-testimonials`)}>Read more</Button>
                                </div>
                                <Button color='#B96118'>Explore Careers</Button>
                            </div>
                        </div>
                    </div>
                    <img className={classes.downComa} src={DownComa}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.wholeMembers}>
                    <img className={classes.upComa} src={UpComa}/>
                    <div className={classes.memberInfo}>
                        <div className={classes.member}>
                            <div className={classes.personIfo}>
                                <img className="circleBig" src={Avatar2}/>
                                <div className={classes.personName}>Cher</div>
                                <div className={classes.personPosition}>Financial Controller</div>
                            </div>
                        </div>
                        <div className={classes.textAndButtons}>
                            <div className={classes.textInfo}>Tykans supports my professional and personal development.
                                Tykans loves me the way I am.</div>
                            <div className={classes.buttonsLife}>
                                <div className={classes.firstButton}>
                                    <Button color='#B96118' OnClick={()=>navigate(`/team-testimonials`)}>Read more</Button>
                                </div>
                                <Button color='#B96118'>Explore Careers</Button>
                            </div>
                        </div>
                    </div>
                    <img className={classes.downComa} src={DownComa}/>
                </div>
            </SwiperSlide><div  className={classes.dots}
                                // onClick={() => swiper.slideNext()}
        >
            .....
            </div>
        </Swiper>
    );
};