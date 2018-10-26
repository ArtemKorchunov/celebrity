<template>
    <div class="face-recognit-wrap">
        <ul v-show="list.length" class="face-recognit-list" ref="resultList">
            <li class="list-element" v-for="item in list" :key="item.id" data-aos="fade-down" data-aos-anchor-placement="top-center">
                <div class="face-result-wrap">
                    <div class="element">
                        <img :src="item.user" class="photo" alt="">
                    </div>
                    <div class="element">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
                    </div>
                    <div class="element">
                        <img :src="item.match" class="photo" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default {
    name: 'MatchFaceList',
    props: {
        list: { 
            type: Array,
            default() {
                return []
            }
        }
    },
}
</script>
<style scoped>
.list-element {
    border: 1px solid;
    border-radius: 20px;
    margin: 40px;
}
.face-recognit-list {
    height: 100vh;
    overflow: auto;
    margin: 0;
    padding: 0;
}
.face-result-wrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    width: calc(60vw / 2);
}
.photo {
    width: 100%;
    max-width: 200px;
}
</style>
