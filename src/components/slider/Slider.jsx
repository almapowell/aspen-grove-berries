import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const photos = [
    {
        name: 'Photo 1',
        url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.drfuhrman.com%2Frollups%2F4bb4704741c780ef9cd22056a220835360b6f5d4456da95bfb237e7652b835f0.jpg&imgrefurl=https%3A%2F%2Fwww.drfuhrman.com%2Felearning%2Feat-to-live-blog%2F82%2Feating-berries-reduces-your-risk-of-heart-attack&tbnid=QnBWMWPXJZRTAM&vet=12ahUKEwjf9cvM3s7nAhXPOM0KHbqkC9IQMygHegUIARCWAg..i&docid=Qt8I3smFJdKnVM&w=695&h=452&q=berries&ved=2ahUKEwjf9cvM3s7nAhXPOM0KHbqkC9IQMygHegUIARCWAg',
        title: 'Sweet Treat of the Bitterroot'
    },
    {
        name: 'Photo 2',
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhip2keto.com%2Frecipes%2Feasy-low-carb-keto-jam-recipe-delicious%2F&psig=AOvVaw2F_vkWS8gGEpKuHza6zD0A&ust=1581695195480000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjO4_jvzucCFQAAAAAdAAAAABAD',
        title: 'Fresh From our Farm'
    },
    {
        name: 'Photo 3',
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.verywellfit.com%2Feasy-three-berry-syrup-or-sauce-2241896&psig=AOvVaw0nIHiPwwoo00v-PprJOLq9&ust=1581695233054000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi1iIbwzucCFQAAAAAdAAAAABAQ',
        title: 'Local Jams, Syrups, & Fresh Berries'
    },
    {
        name: 'Photo 4',
        url: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fgoodtimes.sc%2Frestaurants-dining-eating-out-reviews-wine%2Ffive-farmers-market-hacks-longer-lasting-produce%2F&psig=AOvVaw1qmDkos9FHc24ydMKRvy90&ust=1581695321799000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJilkbLwzucCFQAAAAAdAAAAABAD',
        title: 'From Montana With Love'
    },
    {
        name: 'Photo 5',
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.latimes.com%2Ffood%2Fdailydish%2Fla-dd-farmers-market-report-berries-recipes-20160530-snap-story.html&psig=AOvVaw1qmDkos9FHc24ydMKRvy90&ust=1581695321799000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJilkbLwzucCFQAAAAAdAAAAABAJ',
        title: ''
    }
]



const Slider = () => {


const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: 'slides'
}


return (
    <div>
        <Slider {...settings}>
        {photos.map((photo) => {
            return (
                <div>
                    <img src={photo.url} width="100%"/>
                    <h2>{photo.title}</h2>
                </div>
            )
        })}
        </Slider>
    </div>
);



};

export default Slider;