<template>
    <div>
        <ChildSlot>
            <h1>테스트 잘 가니?</h1>
            <img
                src="https://sitem.ssgcdn.com/72/14/28/item/1000529281472_i1_750.jpg"
                alt="고양이"
            />
        </ChildSlot>
    </div>
</template>

<script>
import ChildSlot from './ChildSlot.vue';

export default {
    name: 'ParentSlot',
    components: { ChildSlot },
};
</script>

<style lang="scss" scoped></style>
