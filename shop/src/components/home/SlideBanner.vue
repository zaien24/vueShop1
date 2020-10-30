<template>
    <section class="slide1">
		<div class="wrap-slick1">
			<div class="slick1">
                <template v-for="banner in banners">
                    <div class="item-slick1 item1-slick1" style="background-image: url(images/master-slide-02.jpg);">
                        <div class="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                            <span class="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
                                Women Collection 2018
                            </span>

                            <h2 class="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
                                New arrivals
                            </h2>

                            <div class="wrap-btn-slide1 w-size1 animated visible-false" data-appear="zoomIn">
                                <!-- Button -->
                                <a href="product.html" class="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </template>
				
			</div>
		</div>
	</section>
</template>

<script>
import bannerApi from '@/api/banner';
export default {
    data() {
        return {
            banners : []
        }
    },
    created() {
        bannerApi.getMainSlideBanners().then(response => {
            this.banners = [].concat(response.data);
            //this.banners = response.data;

            //response.data.push(123);
        }) 
    }
}
</script>