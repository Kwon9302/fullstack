<template>
    <div>
        <FancyPhotoBox>
            <template v-slot:title>
                <h1>사자냥이</h1>
            </template>
            <template v-slot:photo>
                <img
                    src="https://sitem.ssgcdn.com/72/14/28/item/1000529281472_i1_750.jpg"
                    alt="고영쓰"
                />
            </template>
        </FancyPhotoBox>
    </div>
</template>

<script>
import FancyPhotoBox from './FancyPhotoBox.vue';

export default {
    name: 'ParentsPhotoBox',
    components: {
        FancyPhotoBox,
    },
};
</script>

<style lang="scss" scoped></style>
