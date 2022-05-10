<template>
    <Button :class="cx('menu-item')" :leftIcon="data.icon" :componentIcon="data.component" :to="data.to">
        <template #content>
            {{ data.title }}
        </template>
    </Button>
</template>

<script>
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Menu.module.scss';

import Button from '@/components/Button/Button.vue';

export default {
    name: 'MenuItem',
    components: {
        Button,
    },
    data() {
        return {
            cx: classNames.bind(styles),
        };
    },
    props: {
        data: {
            type: Object,
            default: {},
        },
    },
};
</script>
