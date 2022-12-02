import { Swiper,  SwiperSlide} from 'swiper/react';
import { Keyboard }  from 'swiper';
// import {Zoom,Navigation, Pagination} from "swiper";
import UpComa from '../../../assets/images/UpComa.png';
import 'swiper/css/keyboard';
import BelowComa from '../../../assets/images/BelowComa.png';
import Avatar from '../../../assets/images/Avatar.png';
import Star from '../../../assets/images/Star.png';
import classes from './Swiper.module.css';
// import 'swiper/css/zoom';
import 'swiper/css';

export default () => {


    return (
        <Swiper
            spaceBetween={24}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            Keyboard={{ enabled: true }}
            modules={[Keyboard]}
            // zoom={true}
            // navigation={true}
            // pagination={{
            //     clickable: true,
            // }}
            // modules={[Zoom, Navigation, Pagination]}
        //     zoom ={{
        //     maxRatio: 3,
        //     minRatio: 1
        // }}
        //     modules={[Zoom]}
        >
            <SwiperSlide className={classes.active}>
                {/*<div className="swiper-zoom-container">*/}
                    <div className={classes.bigSlide}>
                        <div className={classes.upSlide}>
                            <div className={classes.avatarDiv}>
                                <img className="circleBig" src={Avatar}/>
                            </div>
                            <div className={classes.slideInfo}>
                                <div className={classes.nameInSlide}>Name Surname</div>
                                <div className={classes.companyNameInSlide}>Name Surname</div>
                                <img src={Star}/>
                            </div>
                        </div>
                        <div className={classes.slideBigText}>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. </div>
                    </div>
                {/*</div>*/}
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.slide}>
                    <img className={classes.upComa} src={UpComa}/>
                    <div className={classes.slideText}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    <img className={classes.downComa} src={BelowComa}/>
                    <div className={classes.belowPart}>
                        <div className={classes.name}>Name Surname</div>
                        <div className={classes.company}>Company Name</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.slide}>
                    <img className={classes.upComa} src={UpComa}/>
                    <div className={classes.slideText}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    <img className={classes.downComa} src={BelowComa}/>
                    <div className={classes.belowPart}>
                        <div className={classes.name}>Name Surname</div>
                        <div className={classes.company}>Company Name</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.slide}>
                    <img className={classes.upComa} src={UpComa}/>
                    <div className={classes.slideText}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    <img className={classes.downComa} src={BelowComa}/>
                    <div className={classes.belowPart}>
                        <div className={classes.name}>Name Surname</div>
                        <div className={classes.company}>Company Name</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.slide}>
                    <img className={classes.upComa} src={UpComa}/>
                    <div className={classes.slideText}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    <img className={classes.downComa} src={BelowComa}/>
                    <div className={classes.belowPart}>
                        <div className={classes.name}>Name Surname</div>
                        <div className={classes.company}>Company Name</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.slide}>
                    <img className={classes.upComa} src={UpComa}/>
                    <div className={classes.slideText}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    <img className={classes.downComa} src={BelowComa}/>
                    <div className={classes.belowPart}>
                        <div className={classes.name}>Name Surname</div>
                        <div className={classes.company}>Company Name</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={classes.slide}>
                    <img className={classes.upComa} src={UpComa}/>
                    <div className={classes.slideText}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                    <img className={classes.downComa} src={BelowComa}/>
                    <div className={classes.belowPart}>
                        <div className={classes.name}>Name Surname</div>
                        <div className={classes.company}>Company Name</div>
                    </div>
                </div>
            </SwiperSlide>
            <div className={classes.dots}>
                .....
            </div>

        </Swiper>
    );
};