<template>
    <div :className="cx('wrapper')">
        <Header />
        <div :className="cx('container')">
            <div :className="cx('content')">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Layout/components/Header.vue';
import classNames from 'classnames/bind';
import styles from '@/assets/scss/DefaultLayout.module.scss';

const cx = classNames.bind(styles);

export default {
    name: 'HeaderOnly',
    components: {
        Header,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/GlobalStyles.scss';
</style>
