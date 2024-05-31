<template>
    <div class="card card-body">
        <h2 class="m-3">영상 리스트</h2>
        <ul class="list-group">
            <li
                v-for="v in videos"
                :key="v.id"
                class="list-group-item text-left"
                :class="playingVideo(v.id)"
            >
                {{ v.title }} ( {{ v.category }} )
                <router-link :to="{ name: 'videos/id', params: { id: v.id } }">
                    <span class="float-end badge bg-secondary">듣기</span>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'VideoPlayer',
    components: { YoutubeVue3 },
    setup() {
        const stopVideo = () => {
            playerRef.value.player.stopVideo();
            router.push({ name: 'videos' });
        };
        const playNext = () => {
            const index = videos.findIndex((v) => v.id === videoInfo.video.id);
            const nextVideo = videos[index + 1];
            if (nextVideo) {
                videoInfo.video = nextVideo;
                router.push({
                    name: 'videos/id',
                    params: { id: nextVideo.id },
                });
            } else {
                videoInfo.video = videos[0];
                router.push({
                    name: 'videos/id',
                    params: { id: videos[0].id },
                });
            }
        };
        const playPrev = () => {
            const index = videos.findIndex((v) => v.id === videoInfo.video.id);
            const prevVideo = videos[index - 1];
            if (prevVideo) {
                videoInfo.video = prevVideo;
                router.push({
                    name: 'videos/id',
                    params: { id: prevVideo.id },
                });
            }
        };
        return { videoInfo, playerRef, playNext, stopVideo, playPrev };
    },
};
</script>
