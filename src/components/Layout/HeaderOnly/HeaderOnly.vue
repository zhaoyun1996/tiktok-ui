<template>
    <div :class="cx('wrapper')">
        <Header />
        <div :class="cx('container')">
            <div :class="cx('content')">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Layout/components/Header.vue';
import classNames from 'classnames/bind';
import styles from '@/assets/scss/DefaultLayout.module.scss';

export default {
    name: 'HeaderOnly',
    components: {
        Header,
    },
    data() {
        return {
            cx: classNames.bind(styles),
        };
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/GlobalStyles.scss';
</style>
