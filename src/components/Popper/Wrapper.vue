<template>
    <div :class="cx('wrapper')">
        <slot name="content"></slot>
    </div>
</template>

<script>
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Popper.module.scss';

export default {
    name: 'Wrapper',
    data() {
        return {
            cx: classNames.bind(styles),
        };
    },
};
</script>
