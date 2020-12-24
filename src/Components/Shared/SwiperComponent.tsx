import React from 'react';
import { Image, ImageBackground } from 'react-native';
//@ts-ignore
import SwiperFlatList from 'react-native-swiper-flatlist';

export const SwiperComponent = (props: any) => {
    return (
        <SwiperFlatList autoplay autoplayDelay={2} paginationDefaultColor={'rgba(0,0,0,0.5)'} autoplayLoop showPagination>
            <ImageBackground resizeMode='cover' style={{ height: '100%', width: 420 }} source={require('../../Assets/Images/shop_banner.jpg')} />
            <ImageBackground resizeMode='cover' style={{ height: '100%', width: 420 }} source={require('../../Assets/Images/shop_banner1.jpeg')} />
            <ImageBackground resizeMode='cover' style={{ height:'100%', width:420 }} source={require('../../Assets/Images/shop_banner2.jpeg')}/>
        </SwiperFlatList>
    )
}