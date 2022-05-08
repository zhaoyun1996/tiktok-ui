<template>
    <aside :class="cx('wrapper')">
        <h2>Sidebar</h2>
    </aside>
</template>

<script>
import classNames from 'classnames/bind';
import styles from '@/assets/scss/Sidebar.module.scss';

export default {
    name: 'Sidebar',
    data() {
        return {
            cx: classNames.bind(styles),
        };
    },
};
</script>
