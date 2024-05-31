<template>
    <div>
        <h3>당신이경험한프론트엔드기술은?(첫번째:Slot사용(X))</h3>
        <CheckBox1
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :label="item.label"
            :checked="item.checked"
            @check-changed="CheckBoxChanged"
        >
        </CheckBox1>
    </div>
</template>

<script>
import CheckBox1 from './CheckBox1.vue';
export default {
    name: 'NoSlotTest',
    components: { CheckBox1 },
    data() {
        return {
            items: [
                { id: 'V', checked: true, label: 'Vue' },
                { id: 'A', checked: false, label: 'Angular' },
                { id: 'R', checked: false, label: 'React' },
                { id: 'S', checked: false, label: 'Svelte' },
            ],
        };
    },
    methods: {
        CheckBoxChanged(e) {
            let item = this.items.find((item) => item.id === e.id);
            item.checked = e.checked;
        },
    },
};
</script>
