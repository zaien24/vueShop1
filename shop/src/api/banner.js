import http from './http';

export default {
    async getMainSlideBanners() {
        return http.get('api/banners.json');
    }
}