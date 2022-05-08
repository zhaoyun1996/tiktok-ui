<template>
    <header :class="cx('wrapper')">
        <div :class="cx('inner')"></div>
    </header>
</template>

<script>
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Header.module.scss';

export default {
    name: 'Header',
    data() {
        return {
            cx: classNames.bind(styles),
        };
    },
};
</script>
