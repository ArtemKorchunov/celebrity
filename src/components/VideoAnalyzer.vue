<template>

    <div class="left-side-wrap">
        <video id="videobcg" preload="auto" autoplay="true" loop="loop" :src="src" muted="muted" volume="0">
        </video>
        <div class="video-wrap">
            <div class="draw-wrap">
                <canvas id="canvas" preload="auto" :width="videoWidth" :height="videoHeight" ref="canvas"></canvas>
                <video class="video-recorder" ref="video" @play="processVideo" type="video/mp4" :src="src"  width="100%" height="100%" controls autoplay loop>
                </video>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'VideoAnalyzer',
    data() {
        return {
            videoWidth: 0,
            videoHeight: 0,
            src: `https://www.radiantmediaplayer.com/media/bbb-360p.mp4`
        }
    },
    mounted() {
        setTimeout(() => this.processVideo(), 2000)
    },
    computed: {
        ...mapGetters({ messages: "getMessages" }),
         messagesBySource() {
            return this.messages.filter(m => m.source === this.videoSource);
        }
    },
    methods: {
        ...mapActions(["clearMessages"]),
        processVideo() {
            let video = this.$refs.video;
            const { videoWidth: width = 100, videoHeight: height = 100} = video;
            this.videoWidth = width;
            this.videoHeight = height;
            const ctx = this.$refs.canvas.getContext("2d");
            ctx.beginPath();
            ctx.lineWidth = "4";
            const color = "green";
            ctx.strokeStyle = color;
            ctx.rect(30, 30, 20, 20);
            ctx.stroke();
            setInterval(() => {

                // const currentTime = Math.round(video.currentTime);
                // const event = this.messagesBySource.find(
                //     m => currentTime === m.number
                // );

                // // noinspection EqualityComparisonWithCoercionJS
                // if (typeof event != "undefined") {
                //     const people = event.people;
                //     people.forEach(person => this.drawPersonDataOnFrame(person, ctx));
                // }
            }, 1);
        },
        drawPersonDataOnFrame(person, ctx) {
            const isNew = person.new;
            const box = person.box;
            
            const x1 = box[0] * this.scalingFactor.x;
            const y1 = box[1] * this.scalingFactor.y;
            const x2 = box[2] * this.scalingFactor.x;
            const y2 = box[3] * this.scalingFactor.y;
            ctx.beginPath();
            ctx.lineWidth = "4";
            const color = isNew ? "green" : "red";
            ctx.strokeStyle = color;
            ctx.rect(x1, y1, x2, y2);
            ctx.stroke();
        }
    }
}
</script>
<style scoped>
.left-side-wrap {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.draw-wrap {
    position: relative;
}
#canvas {
    position: absolute;
    width: 100%;
}
.video-recorder {
    width: 100%;
}
.video-wrap {
    width: 80%;
}
#videobcg {
    position: absolute;
    height: 100vh;
    filter: blur(15px);
}
</style>
