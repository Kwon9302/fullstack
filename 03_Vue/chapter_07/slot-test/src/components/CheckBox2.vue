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
        <!-- 슬롯 사용 -->
        <slot>???????????</slot>
    </div>
</template>

<script>
export default {
    name: 'CheckBox2',
    props: ['id', 'checked'],
};
</script>
