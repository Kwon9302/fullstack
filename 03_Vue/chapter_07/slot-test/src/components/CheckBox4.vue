<template>
    <div>
        <input
            type="checkbox"
            :value="id"
            :checked="checked"
            @change="
                $emit('check-changed', { id, checked: $event.target.checked })
            "
        />

        <!-- 슬롯사용할 예정인 부분-->
        <span
            v-if="checked === true"
            style="color: blue; text-decoration: underline"
        >
            <i>{{ label }}</i>
        </span>
        <span v-else style="color: gray">{{ label }}</span>
    </div>
    <!-- 여기까지  -->
</template>

<script>
export default {
    name: 'CheckBox1',
    props: ['id', 'checked', 'label'],
};
</script>
