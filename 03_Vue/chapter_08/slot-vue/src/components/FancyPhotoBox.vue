<template>
    <div class="fancy">
        <slot name="title">Title Slot</slot>
        <slot name="photo">photo Slot</slot>
    </div>
</template>

<script>
export default {
    name: 'FancyPhotoBox',
};
</script>

<style scope>
.fancy {
    text-align: center;
    padding: 30px;
    border-radius: 30px;
    border: 10px solid #ccc;
    background-color: #333;
    margin: 30px 0px;
}
</style>
