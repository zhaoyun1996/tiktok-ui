<template>
    <div :className="cxWrapper">
        <Header />
        <div :className="cxContainer">
            <Sidebar />
            <div :className="cxContent">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Layout/components/Header.vue';
import Sidebar from '@/components/Layout/DefaultLayout/Sidebar.vue';
import classNames from 'classnames/bind';
import styles from '@/assets/scss/DefaultLayout.module.scss';

export default {
    name: 'DefaultLayout',
    components: {
        Header,
        Sidebar,
    },

    data() {
        const cx = classNames.bind(styles);
        return {
            cxWrapper: cx('wrapper'),
            cxContainer: cx('container'),
            cxContent: cx('content'),
        };
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/GlobalStyles.scss';
</style>
